import React, { useState, useRef, useEffect } from 'react'
import { FiMic, FiMicOff, FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const STORAGE_KEY = 'mark-interview-history'

const InterviewChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Click the microphone to start the interview')
  const [showTranscript, setShowTranscript] = useState(false)
  const [interviewStarted, setInterviewStarted] = useState(false)

  const recognitionRef = useRef<any>(null)
  const synthesisRef = useRef<SpeechSynthesisUtterance | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        console.log('Available voices:', voices.length)
      }

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
      loadVoices()

      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false // Changed to false for better control
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[event.results.length - 1][0].transcript
          console.log('Heard:', transcript)
          handleVoiceInput(transcript)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error)
          if (event.error === 'no-speech') {
            // Auto-retry on no speech
            setStatusMessage('Didn\'t catch that. Listening again...')
            setTimeout(() => {
              if (!isSpeaking && !isProcessing) {
                startListening()
              }
            }, 1000)
          } else if (event.error === 'not-allowed') {
            setStatusMessage('⚠️ Microphone access denied. Please allow microphone in your browser settings.')
            setIsListening(false)
          } else if (event.error === 'aborted') {
            // Ignore aborted errors (happens during normal operation)
          } else {
            setStatusMessage('Click the microphone to continue')
            setIsListening(false)
          }
        }

        recognitionRef.current.onend = () => {
          console.log('Recognition ended')
          setIsListening(false)
        }
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      window.speechSynthesis.cancel()
    }
  }, [])

  // Load interview history
  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY)
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
        setMessages(messagesWithDates)
        if (messagesWithDates.length > 0) {
          setInterviewStarted(true)
        }
      } catch (error) {
        console.error('Error loading interview history:', error)
      }
    }
  }, [])

  // Save messages
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  // Auto scroll transcript
  useEffect(() => {
    if (showTranscript) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, showTranscript])

  const startInterview = async () => {
    setInterviewStarted(true)

    // Initial greeting from Tina
    const greeting = "Hi! I'm Tina, Mark's AI assistant. I can help you learn more about Mark's experience, skills, and projects. What would you like to know about him?"

    const initialMessage: Message = {
      role: 'assistant',
      content: greeting,
      timestamp: new Date(),
    }

    setMessages([initialMessage])

    // Speak the greeting
    await speakText(greeting)

    // Start listening after a short delay
    setTimeout(() => {
      setStatusMessage('Your turn - Ask about Mark!')
      startListening()
    }, 500)
  }

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start()
        setIsListening(true)
        setStatusMessage('Listening... Ask about Mark')
      } catch (error: any) {
        console.error('Error starting recognition:', error)
        // If already started, ignore the error
        if (error.error !== 'aborted') {
          setStatusMessage('Please allow microphone access to continue')
        }
      }
    }
  }

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const handleVoiceInput = async (transcript: string) => {
    if (!transcript.trim()) return

    // Check for end interview command
    const endPhrases = [
      'end interview',
      'stop interview',
      'finish interview',
      'end the interview',
      'stop the interview',
      'finish the interview',
      'that\'s all',
      'thank you goodbye',
      'thanks goodbye'
    ]

    const lowerTranscript = transcript.toLowerCase().trim()
    const shouldEnd = endPhrases.some(phrase => lowerTranscript.includes(phrase))

    if (shouldEnd) {
      stopListening()
      setStatusMessage('Ending interview...')

      const goodbyeMessage: Message = {
        role: 'assistant',
        content: "Thank you for your time! It was great talking with you. Have a wonderful day!",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, goodbyeMessage])
      await speakText(goodbyeMessage.content)

      // Wait for speech to finish, then end
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY) // Clear interview history
        window.close()
      }, 2000)

      return
    }

    stopListening()
    setStatusMessage('Processing your question...')
    setIsProcessing(true)

    const userMessage: Message = {
      role: 'user',
      content: transcript,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: transcript,
          history: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          mode: 'chat', // Use chat mode (Tina speaks about Mark)
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])

      // Speak the response
      await speakText(data.response)

      // Resume listening for next question
      setTimeout(() => {
        setStatusMessage('Your turn - Ask another question!')
        startListening()
      }, 500)
    } catch (error) {
      console.error('Error:', error)
      setStatusMessage('Error processing. Please try again.')
      const errorMessage: Message = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding. Could you please repeat your question?",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      await speakText(errorMessage.content)
      setTimeout(() => startListening(), 500)
    } finally {
      setIsProcessing(false)
    }
  }

  const speakText = async (text: string): Promise<void> => {
    return await new Promise((resolve) => {
      console.log('Starting to speak:', text.substring(0, 50) + '...')

      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1.0
      utterance.volume = 1.0
      utterance.lang = 'en-US'

      // Get voices and select one
      const voices = window.speechSynthesis.getVoices()
      console.log('Available voices:', voices.length)

      // Try to find a female voice
      let selectedVoice = voices.find(voice =>
        voice.lang === 'en-US' &&
        (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Samantha'))
      )

      // Fallback to any English voice
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang === 'en-US')
      }

      // Fallback to first available voice
      if (!selectedVoice && voices.length > 0) {
        selectedVoice = voices[0]
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice
        console.log('Using voice:', selectedVoice.name)
      } else {
        console.warn('No voice found, using default')
      }

      utterance.onstart = () => {
        console.log('Speech started')
        setIsSpeaking(true)
        setStatusMessage('Tina is responding...')
      }

      utterance.onend = () => {
        console.log('Speech ended')
        setIsSpeaking(false)
        resolve()
      }

      utterance.onerror = (event) => {
        console.error('Speech error:', event)
        setIsSpeaking(false)
        resolve()
      }

      synthesisRef.current = utterance

      // Small delay to ensure speech synthesis is ready
      setTimeout(() => {
        window.speechSynthesis.speak(utterance)
      }, 100)
    })
  }

  const toggleMicrophone = () => {
    console.log('Toggle mic clicked', { interviewStarted, isListening, isSpeaking, isProcessing })

    if (!interviewStarted) {
      startInterview()
    } else if (isListening) {
      stopListening()
      setStatusMessage('Paused - Click microphone to continue')
    } else if (!isSpeaking && !isProcessing) {
      setStatusMessage('Starting microphone...')
      startListening()
    }
  }

  const handleEndInterview = () => {
    const confirmed = window.confirm('Are you sure you want to end this interview? The conversation history will be cleared.')
    if (confirmed) {
      stopListening()
      window.speechSynthesis.cancel()
      localStorage.removeItem(STORAGE_KEY) // Clear interview history
      window.close()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="h-screen flex flex-col relative z-10">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Talk with Tina - Mark's AI Assistant
              </h1>
              <p className="text-sm text-gray-300">
                Ask about Mark's experience, skills, and projects
              </p>
            </div>
            <button
              onClick={handleEndInterview}
              className="px-5 py-2.5 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-semibold hover:bg-red-500/30 hover:border-red-500 transition-all duration-300"
            >
              End Interview
            </button>
          </div>
        </div>

        {/* Main Interview Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative">
          {/* Avatar/Visual */}
          <div className="mb-10">
            <div className={`w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 via-primary to-purple-600 flex items-center justify-center relative transition-all duration-700 ${
              isSpeaking ? 'scale-110 shadow-[0_0_100px_rgba(126,49,241,0.8)]' : 'shadow-[0_0_60px_rgba(126,49,241,0.5)]'
            }`}>
              <div className="text-7xl">🤖</div>

              {/* Pulsing rings when speaking */}
              {isSpeaking && (
                <>
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-75"></div>
                  <div className="absolute inset-[-10px] rounded-full border-4 border-primary animate-pulse opacity-60"></div>
                </>
              )}

              {/* Listening indicator */}
              {isListening && !isSpeaking && (
                <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="mb-10 flex items-center justify-center space-x-2 h-20">
            {(isListening || isSpeaking) ? (
              Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    isSpeaking ? 'bg-purple-400' : 'bg-red-400'
                  }`}
                  style={{
                    height: '30%',
                    animation: `wave ${0.5 + (i * 0.05)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))
            ) : (
              <div className="flex items-center space-x-2">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className="inline-block w-2 h-2 bg-gray-500/50 rounded-full" />
                ))}
              </div>
            )}
          </div>

          {/* Status Message */}
          <div className="mb-10 text-center max-w-2xl">
            <p className="text-2xl font-semibold text-white mb-3">
              {statusMessage}
            </p>
            <p className="text-base text-gray-300">
              {!interviewStarted && 'Click the microphone below to start the interview'}
              {isListening && 'I\'m listening... Speak your question clearly'}
              {isSpeaking && 'Please wait, I\'m formulating my response'}
              {isProcessing && 'Processing your question...'}
            </p>
          </div>

          {/* Microphone Control */}
          <button
            onClick={toggleMicrophone}
            disabled={isSpeaking || isProcessing}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
              isListening
                ? 'bg-red-500 hover:bg-red-600 shadow-[0_0_60px_rgba(239,68,68,0.8)] scale-110 animate-pulse'
                : 'bg-gradient-to-br from-purple-500 to-primary hover:shadow-[0_0_60px_rgba(126,49,241,0.8)]'
            } ${
              (isSpeaking || isProcessing) ? 'opacity-60 cursor-not-allowed scale-95' : 'hover:scale-110'
            }`}
            aria-label={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isListening ? (
              <FiMic className="w-10 h-10 text-white" />
            ) : (
              <FiMicOff className="w-10 h-10 text-white" />
            )}
          </button>

          <p className="mt-4 text-sm text-gray-400">
            {isListening ? 'Click to pause' : (isSpeaking || isProcessing) ? 'Please wait...' : 'Click to speak'}
          </p>

          {/* Transcript Toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="mt-8 flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-sm font-medium">
              {showTranscript ? 'Hide' : 'Show'} Transcript
            </span>
            {showTranscript ? (
              <FiChevronUp className="w-4 h-4" />
            ) : (
              <FiChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Transcript Panel */}
        {showTranscript && (
          <div className="border-t border-white/10 bg-black/30 backdrop-blur-xl max-h-72 overflow-y-auto">
            <div className="px-6 py-5">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Interview Transcript
              </h3>
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <p className="text-sm text-gray-400 italic">
                    No conversation yet. Start the interview to see the transcript.
                  </p>
                ) : (
                  messages.map((message, index) => (
                    <div key={index} className="text-sm bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="font-semibold text-white mb-2 flex items-center justify-between">
                        <span>
                          {message.role === 'user' ? '🎤 You' : '🤖 Tina'}
                        </span>
                        <span className="text-xs text-gray-400 font-normal">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Wave Animation CSS */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  )
}

export default InterviewChat
