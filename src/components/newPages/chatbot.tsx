import React, { useState, useRef, useEffect } from 'react'
import { FiSend, FiMessageCircle, FiX, FiTrash2 } from 'react-icons/fi'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  suggestInterview?: boolean
}

const STORAGE_KEY = 'mark-chatbot-history'

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY)
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
        setMessages(messagesWithDates)
      } catch (error) {
        console.error('Error loading chat history:', error)
        setMessages(getInitialMessage())
      }
    } else {
      setMessages(getInitialMessage())
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages])

  const getInitialMessage = (): Message[] => {
    return [
      {
        role: 'assistant',
        content: "Hi! I'm Tina, Mark's AI assistant. Feel free to ask me anything about Mark's experience, skills, projects, or qualifications!",
        timestamp: new Date(),
      },
    ]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleClearChat = () => {
    const confirmed = window.confirm('Are you sure you want to clear the chat history?')
    if (confirmed) {
      const initialMessages = getInitialMessage()
      setMessages(initialMessages)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMessages))
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    // Check for /call command
    if (inputMessage.trim().toLowerCase() === '/call') {
      const userMessage: Message = {
        role: 'user',
        content: inputMessage,
        timestamp: new Date(),
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: "Ready to have a voice conversation with Mark's AI assistant, Tina? Click the button below to start the interview!",
        timestamp: new Date(),
        suggestInterview: true,
      }

      setMessages((prev) => [...prev, userMessage, assistantMessage])
      setInputMessage('')
      return
    }

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          history: messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
        suggestInterview: data.suggestInterview || false,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "What are Mark's technical skills?",
    "Tell me about Mark's work experience",
    "What projects has Mark worked on?",
    "/call - Start voice interview",
  ]

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question)
  }

  const handleInterviewAccept = () => {
    // Open interview page in new tab
    window.open('/interview', '_blank')
  }

  const handleInterviewDecline = (messageIndex: number) => {
    // Remove the interview suggestion flag from this message
    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === messageIndex ? { ...msg, suggestInterview: false } : msg
      )
    )
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <FiMessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed top-24 left-3 right-3 bottom-3 sm:bottom-6 sm:right-6 sm:top-auto sm:left-auto z-50 w-auto sm:w-[380px] h-auto sm:h-[600px] flex flex-col rounded-2xl border border-gray-200 dark:border-glass-border dark:bg-glass-gradient backdrop-blur-2xl shadow-2xl dark:shadow-glass-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border-b border-gray-200 dark:border-glass-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center">
                <FiMessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-[1rem] font-semibold text-gray-900 dark:text-dark-text">
                  Tina
                </h3>
                <p className="text-xs text-gray-600 dark:text-dark-text-secondary">
                  Mark's AI Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClearChat}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300 group"
                aria-label="Clear chat"
                title="Clear chat history"
              >
                <FiTrash2 className="w-4 h-4 text-gray-600 dark:text-dark-text-secondary group-hover:text-red-400 transition-colors duration-300" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300"
                aria-label="Close chat"
              >
                <FiX className="w-5 h-5 text-gray-600 dark:text-dark-text-secondary" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-purple-500 text-white'
                        : 'bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-glass-border text-gray-900 dark:text-dark-text'
                    }`}
                  >
                    <p className="text-[0.85rem] sm:text-[0.9rem] whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.role === 'user'
                          ? 'text-white/70'
                          : 'text-gray-500 dark:text-dark-text-secondary'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>

                {/* Interview Suggestion Buttons */}
                {message.suggestInterview && message.role === 'assistant' && (
                  <div className="flex justify-start mt-3">
                    <div className="flex gap-2">
                      <button
                        onClick={handleInterviewAccept}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                      >
                        Yes, start interview
                      </button>
                      <button
                        onClick={() => handleInterviewDecline(index)}
                        className="px-4 py-2 rounded-xl border border-gray-300 dark:border-glass-border bg-white dark:bg-white/5 text-gray-900 dark:text-dark-text text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
                      >
                        No, keep chatting
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-glass-border">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-600 dark:text-dark-text-secondary mb-2">
                  Try asking:
                </p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="w-full text-left px-4 py-2 rounded-xl border border-gray-200 dark:border-glass-border bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 text-[0.85rem] text-gray-900 dark:text-dark-text"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-200 dark:border-glass-border bg-gray-50 dark:bg-white/5">
            <div className="flex items-end space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={1}
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-[0.9rem] rounded-xl border border-gray-300 dark:border-glass-border bg-white dark:bg-white/5 text-gray-900 dark:text-dark-text placeholder-gray-400 dark:placeholder-dark-text-secondary resize-none focus:outline-none focus:border-primary/30 transition-all duration-300"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-primary to-purple-500 text-white hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex-shrink-0"
                aria-label="Send message"
              >
                <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
