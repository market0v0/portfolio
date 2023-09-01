import React, { useState, useEffect } from 'react'

const CursorAnimation: React.FC = () => {
  const isTyping = true
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor)
    }, 500)

    return () => {
      clearInterval(cursorInterval)
    }
  }, [])

  return <span>{isTyping && showCursor && <span className='font-thin'>|</span>}</span>
}

export default CursorAnimation
