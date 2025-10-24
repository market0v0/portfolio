// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import path from 'path';
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

// Cache for the resume content
let resumeCache: string | null = null;

async function loadResume(): Promise<string> {
  if (resumeCache) {
    return resumeCache;
  }

  try {
    // Try to load from text file first (manual extraction)
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
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Load resume content from PDF
    const resumeContent = await loadResume();

    // Initialize Groq Chat Model
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
    });

    // Format conversation history
    const conversationHistory = history.length > 0
      ? '\n\nConversation History:\n' + history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Tina'}: ${msg.content}`).join('\n')
      : '';

    // Create a prompt template
    const prompt = PromptTemplate.fromTemplate(`
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

Example style:
Question: "What are Mark's skills?"
Good: "Mark mainly works with React, TypeScript, and Next.js on the frontend. On the backend, he uses Spring Boot and Node.js. He's also been working with AWS and AI integration lately!"
Bad (first person): "I work with React, TypeScript..." ❌
Bad (too formal): "Mark has a wide range of technical skills that can be categorized into several areas. In Frontend Development, he is proficient in..." ❌

Question: "What is the sun?"
Good: "I'm here to answer questions about Mark's professional background and experience. Feel free to ask me about his skills, projects, or work history!"
Bad: "The sun is a star..." ❌

Answer naturally in third person:
`);

    // Create the chain
    const chain = prompt.pipe(model).pipe(new StringOutputParser());

    // Invoke the chain
    const response = await chain.invoke({
      resume: resumeContent,
      history: conversationHistory,
      question: message,
    });

    return res.status(200).json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: 'Failed to process chat request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
