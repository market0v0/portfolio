import React from 'react'
import Head from 'next/head'
import InterviewChat from '@/components/newPages/InterviewChat'

const InterviewPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Talk with Tina - Mark's AI Assistant</title>
        <meta
          name="description"
          content="Have a voice conversation with Tina, Mark's AI assistant. Ask about Mark's experience, skills, projects, and technical expertise in React, TypeScript, Spring Boot, and AWS."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InterviewChat />
    </>
  )
}

export default InterviewPage
