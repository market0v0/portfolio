# AI Voice Interview Setup - Tina (Mark's AI Assistant)

## Overview

The AI Voice Interview feature allows users to have a real-time voice conversation with Tina, an AI assistant that answers questions about Mark Vincent A. Cueva's professional background, skills, experience, and projects.

## Features

- **Real-time Voice Interaction**: Uses Web Speech API for speech recognition and synthesis
- **Conversation Memory**: Maintains context throughout the interview session
- **Visual Feedback**: Animated avatar, waveform visualizations, and status indicators
- **Interview Transcript**: Shows full conversation history with timestamps
- **Smart End Detection**: Automatically detects phrases like "end interview" to gracefully close
- **Persistent History**: Saves conversation in browser localStorage

## Technology Stack

- **Frontend**: React, TypeScript, Next.js
- **Speech APIs**: Web Speech API (SpeechRecognition, SpeechSynthesis)
- **AI Model**: Groq's Llama 3.1 8B Instant via LangChain
- **Storage**: Browser localStorage for conversation persistence
- **Styling**: Tailwind CSS with gradient animations

## Environment Variables Required

To deploy this feature to Vercel or any production environment, you need to set up the following environment variable:

### Required Environment Variables

```bash
GROQ_API_KEY=your_groq_api_key_here
```

### How to Get Groq API Key

1. Go to [Groq Console](https://console.groq.com)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `gsk_...`)

### Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `GROQ_API_KEY`
   - **Value**: Your Groq API key (e.g., `gsk_xxxxxxxxxxxxxxxxxxxx`)
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. Redeploy your application for changes to take effect

### Local Development Setup

Create a `.env.local` file in your project root:

```bash
# AI Interview - Groq API
GROQ_API_KEY=gsk_your_api_key_here
```

**Important**: Never commit `.env.local` to version control. It should be in your `.gitignore` file.

## File Structure

```
src/
├── pages/
│   ├── interview.tsx          # Interview page route
│   └── api/
│       └── chat.ts            # AI chat API endpoint
├── components/
│   └── newPages/
│       └── InterviewChat.tsx  # Main interview component
public/
└── resume_summary.txt         # Resume data for AI reference
```

## How It Works

### 1. Interview Flow

1. User clicks microphone button to start interview
2. Tina greets the user and starts listening
3. User asks questions verbally
4. Speech recognition converts voice to text
5. Text is sent to `/api/chat` endpoint
6. Groq AI (Llama 3.1 8B) generates response based on resume data
7. Response is converted to speech via Web Speech Synthesis
8. Tina speaks the answer
9. Cycle repeats until user ends interview

### 2. Ending the Interview

Users can end the interview in two ways:

#### A. Voice Commands (Automatic Detection)
Say any of these phrases:
- "end interview"
- "stop interview"
- "finish interview"
- "end the interview"
- "stop the interview"
- "finish the interview"
- "that's all"
- "thank you goodbye"
- "thanks goodbye"

When detected, Tina will:
1. Stop listening
2. Say goodbye message
3. Clear conversation history
4. Close the window after 2 seconds

#### B. Manual Button
Click the **"End Interview"** button in the header:
- Shows confirmation dialog
- Clears conversation history
- Stops all speech processing
- Closes the window

### 3. AI Prompt System

The chat API (`/api/chat.ts`) uses two modes:

#### Chat Mode (Default for Interview Page)
- AI responds as **Tina**, Mark's assistant
- Uses **third person** to talk about Mark
- Keeps responses short and conversational (2-4 sentences)
- References the resume data from `resume_summary.txt`
- Detects hiring-related keywords and can suggest interview mode

#### Interview Mode (Future Feature)
- AI responds **as Mark** in first person
- More detailed, professional responses
- Uses STAR method for behavioral questions
- Demonstrates technical expertise

### 4. Resume Data Source

The AI reads from `public/resume_summary.txt` which contains:
- Professional experience at Softype, Ease Solutions, Alliance Software
- Technical skills (React, TypeScript, Spring Boot, AWS, etc.)
- Notable projects (BRAMK, AskMarked, etc.)
- Training & certifications
- Education

## Browser Requirements

### Speech Recognition Support
- **Chrome/Edge**: ✅ Fully supported
- **Safari**: ✅ Supported (iOS 14.5+, macOS 10.15+)
- **Firefox**: ❌ Not supported (use Chrome/Edge)

### Speech Synthesis Support
- **Chrome/Edge**: ✅ Fully supported
- **Safari**: ✅ Fully supported
- **Firefox**: ✅ Fully supported

**Recommended**: Use Chrome or Edge for best experience.

## User Permissions

The application requires **microphone access**. Users will see a browser permission prompt on first use.

If permission is denied:
- Status message shows: "⚠️ Microphone access denied. Please allow microphone in your browser settings."
- Interview cannot proceed without microphone access

## Deployment Checklist

Before deploying to Vercel:

- [ ] Set `GROQ_API_KEY` environment variable in Vercel dashboard
- [ ] Ensure `resume_summary.txt` is up to date in `/public` folder
- [ ] Test microphone permissions work in production domain
- [ ] Verify HTTPS is enabled (required for Web Speech API)
- [ ] Test on Chrome/Edge browsers
- [ ] Check that localStorage works (for conversation history)

## API Rate Limits

**Groq Free Tier**:
- 30 requests per minute
- 14,400 requests per day
- Sufficient for interview feature usage

If you exceed limits, consider:
- Implementing request throttling
- Adding retry logic with exponential backoff
- Upgrading to Groq paid plan for higher limits

## Performance Optimization

- **Fast AI Model**: Using Llama 3.1 8B Instant (< 2 second response time)
- **Short Responses**: Limited to 300 tokens for quick voice playback
- **Resume Caching**: Resume content is cached in memory after first load
- **Timeout Protection**: 25-second timeout prevents hanging requests

## Troubleshooting

### "Microphone access denied"
- Check browser settings → Site settings → Microphone
- Ensure HTTPS is enabled (required for secure contexts)

### "No voices available"
- Wait a few seconds after page load for voices to initialize
- Try refreshing the page

### "AI response timeout"
- Check if GROQ_API_KEY is set correctly
- Verify API key is valid and not expired
- Check Groq service status

### "Interview won't end"
- Use the manual "End Interview" button
- Refresh the page to reset

## Future Enhancements

- [ ] Add interview mode toggle (chat vs formal interview)
- [ ] Support for multiple languages
- [ ] Voice selection (male/female, accent options)
- [ ] Export transcript as PDF
- [ ] Email transcript to user
- [ ] Analytics tracking (questions asked, session duration)
- [ ] Fallback to text input if microphone unavailable

## Security Considerations

- Resume data is public (no sensitive information)
- API key is server-side only (not exposed to client)
- localStorage is used only for conversation history (no PII)
- HTTPS required for Web Speech API
- No data is sent to third parties except Groq AI

## Cost Estimation

**Groq API Pricing** (as of 2024):
- Free tier: 14,400 requests/day
- Paid tier: $0.00002 per token (input), $0.00002 per token (output)

Average interview session:
- Duration: 10-15 minutes
- Questions: 8-12 questions
- Tokens per question: ~500 tokens (input + output)
- Total tokens: ~5,000 tokens
- **Cost per interview**: ~$0.10

For portfolio use with moderate traffic, free tier is sufficient.

## Support & Contact

For questions about the AI Interview feature:
- **Email**: cuevamarkvincent@gmail.com
- **GitHub**: [market0v0](https://github.com/market0v0)

---

**Built with** ❤️ **using Next.js, React, TypeScript, Groq AI, and Web Speech API**
