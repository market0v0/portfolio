// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import path from 'path';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

// Cache for the resume content (cleared on file change)
let resumeCache: string | null = null;

async function loadResume(): Promise<string> {
  if (resumeCache) {
    return resumeCache;
  }

  try {
    // Load resume_summary.txt (optimized for Groq free tier to avoid timeouts)
    const summaryPath = path.join(process.cwd(), 'public', 'resume_summary.txt');
    if (fs.existsSync(summaryPath)) {
      const text = fs.readFileSync(summaryPath, 'utf-8');
      resumeCache = text;
      return text;
    }

    // Fallback to full resume.txt if summary doesn't exist
    const textPath = path.join(process.cwd(), 'public', 'resume.txt');
    if (fs.existsSync(textPath)) {
      const text = fs.readFileSync(textPath, 'utf-8');
      resumeCache = text;
      return text;
    }

    // Fallback: Try to extract metadata from PDF
    const pdfPath = path.join(process.cwd(), 'public', 'CUEVA_MARKVINCENT_CV.pdf');
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Get basic info
    const title = pdfDoc.getTitle() || '';
    const author = pdfDoc.getAuthor() || '';
    const subject = pdfDoc.getSubject() || '';

    // Return a fallback message
    const fallbackText = `Resume: ${author || 'Mark Vincent A. Cueva'}\n${title}\n${subject}\n\nPlease extract the PDF content manually to public/resume.txt for full functionality.`;
    resumeCache = fallbackText;
    return fallbackText;
  } catch (error) {
    console.error('Error loading resume:', error);
    throw new Error('Failed to load resume');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [], mode = 'chat' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Load resume content from PDF
    const resumeContent = await loadResume();

    // Check if API key exists
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY not found in environment variables')
      return res.status(500).json({
        error: 'API key not configured',
        details: 'GROQ_API_KEY is missing'
      });
    }

    // Initialize Groq Chat Model with faster settings
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: 'llama-3.1-8b-instant', // Fast Groq model
      temperature: 0.7,
      maxTokens: 300, // Keep responses short for voice
      timeout: 30000, // 30 second timeout
    });

    // Format conversation history
    interface HistoryMessage {
      role: string
      content: string
    }

    const conversationHistory = history.length > 0
      ? '\n\nConversation History:\n' + history.map((msg: HistoryMessage) => `${msg.role === 'user' ? 'User' : (mode === 'interview' ? 'Mark' : 'Tina')}: ${msg.content}`).join('\n')
      : '';

    // Create appropriate prompt based on mode
    let prompt;

    if (mode === 'interview') {
      // Interview mode: AI responds AS Mark in first person
      prompt = PromptTemplate.fromTemplate(`
You are Mark Vincent A. Cueva, a Software Engineer, having a professional interview conversation with a potential employer.

Your Resume/Background:
{resume}
{history}

Employer's Question: {question}

Instructions:
- Respond AS Mark in FIRST PERSON ("I", "my", "I've worked on...")
- Give detailed, professional, articulate responses suitable for a job interview
- Show enthusiasm and passion for your work
- Provide specific examples and metrics when relevant
- Keep responses conversational but professional (3-6 sentences typically)
- If asked technical questions, demonstrate deep expertise
- If asked behavioral questions, use STAR method (Situation, Task, Action, Result)
- You can ask clarifying questions back to the employer
- Be authentic and personable - let your personality shine through
- Focus on achievements, impact, and problem-solving abilities

Example style:
Question: "Tell me about your experience with React"
Good: "I've been working with React professionally for over 3 years now, and it's become my go-to framework for frontend development. At Softype, I recently architected a seat selection system using the modern T3 Stack with Next.js 14, which handles 10,000+ daily bookings. I'm particularly passionate about performance optimization - I reduced our bundle size by 35% by consolidating our component library. I also love mentoring other developers on React best practices!"

Question: "What's your biggest achievement?"
Good: "I'd say architecting the PWA system at Softype stands out. We needed full offline functionality for 5,000+ daily users, so I built a client-side database using SQLite and IndexedDB with an intelligent sync engine. The challenging part was handling concurrent updates from 1,000+ users without data loss. I implemented operational transformation algorithms, and we've had zero data loss incidents since launch. Seeing it work seamlessly in production was incredibly rewarding!"

Respond naturally and professionally as Mark:
`);
    } else {
      // Chat mode: AI is Tina, Mark's assistant (third person)
      // PLUS interview detection
      prompt = PromptTemplate.fromTemplate(`
You are Tina, Mark's friendly AI assistant. Talk like a real person having a casual conversation - keep it short, natural, and human.

Resume Info:
{resume}
{history}

Current Question: {question}

Instructions:
- ONLY answer questions about Mark's professional background, skills, experience, projects, or qualifications
- If the question is NOT about Mark or his professional life, politely decline and redirect
- Keep responses SHORT (2-4 sentences max for general questions)
- Talk naturally and conversationally, but maintain proper grammar
- ALWAYS use THIRD PERSON - refer to Mark as "Mark" or "he/his" (NEVER use "I", "my", "I'm")
- Only list a few key items, not everything - save the details for follow-up questions
- Be conversational and warm, not formal or robotic
- If they ask something specific about Mark, give more details
- If they want a list, keep it to 3-5 top items with brief descriptions

INTERVIEW DETECTION - CRITICAL:
If the user's message contains ANY of these words or phrases:
- interview, hire, hiring, job, position, opening, candidate, recruiting, recruiter, employment, employer, applying
Then you MUST respond with EXACTLY this text (copy it word-for-word):
"[INTERVIEW_SUGGEST] It sounds like you might be interested in interviewing Mark! Would you like to switch to interview mode for a more detailed, formal conversation with him?"

DO NOT paraphrase. DO NOT change the wording. Copy it exactly as written above, including the [INTERVIEW_SUGGEST] tag at the start.

Example:
Question: "can i interview mark"
Response: "[INTERVIEW_SUGGEST] It sounds like you might be interested in interviewing Mark! Would you like to switch to interview mode for a more detailed, formal conversation with him?"

Question: "i wanna hire him"
Response: "[INTERVIEW_SUGGEST] It sounds like you might be interested in interviewing Mark! Would you like to switch to interview mode for a more detailed, formal conversation with him?"

For non-interview questions:
Question: "What are Mark's skills?"
Good: "Mark mainly works with React, TypeScript, and Next.js on the frontend. On the backend, he uses Spring Boot and Node.js. He's also been working with AWS and AI integration lately!"
Bad (first person): "I work with React, TypeScript..." ❌

Question: "What is the sun?"
Good: "I'm here to answer questions about Mark's professional background and experience. Feel free to ask me about his skills, projects, or work history!"
Bad: "The sun is a star..." ❌

Answer naturally in third person:
`);
    }

    // Create the chain
    const chain = prompt.pipe(model).pipe(new StringOutputParser());

    console.log('Invoking AI model...')
    const startTime = Date.now()

    // Invoke the chain with timeout
    const response = await Promise.race([
      chain.invoke({
        resume: resumeContent,
        history: conversationHistory,
        question: message,
      }),
      new Promise((_resolve, reject) =>
        setTimeout(() => reject(new Error('Request timeout - Groq API took too long to respond')), 45000)
      )
    ]) as string;

    const duration = Date.now() - startTime
    console.log(`AI response received in ${duration}ms`)
    console.log('AI Response:', response.substring(0, 200)) // Log first 200 chars

    // Check if response suggests interview mode
    const suggestInterview = response.includes('[INTERVIEW_SUGGEST]');
    const cleanResponse = response.replace('[INTERVIEW_SUGGEST]', '').trim();
    console.log('Interview suggest flag:', suggestInterview)

    return res.status(200).json({
      response: cleanResponse,
      suggestInterview: mode === 'chat' ? suggestInterview : false
    });
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', errorMessage)

    return res.status(500).json({
      error: 'Failed to process chat request',
      details: errorMessage
    });
  }
}
