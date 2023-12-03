import React, { useState, useEffect } from 'react'

interface TypingTitleProps {
  text: string
}

const TypingTitle: React.FC<TypingTitleProps> = ({ text = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCursorVisible, setIsCursorVisible] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else {
        clearInterval(typingInterval)
        setIsCursorVisible(false)
      }
    }, 50) // Adjust the interval to control typing speed

    return () => {
      clearInterval(typingInterval)
    }
  }, [currentIndex, text])

  useEffect(() => {
    let cursorInterval: string | number | NodeJS.Timer | undefined

    if (currentIndex < text.length) {
      cursorInterval = setInterval(() => {
        setIsCursorVisible((prev) => !prev)
      }, 500) // Adjust the interval to control cursor blinking speed
    } else {
      setIsCursorVisible(false)
    }

    return () => {
      clearInterval(cursorInterval)
    }
  }, [currentIndex, text])

  return (
    <span>
      {displayedText}
      {isCursorVisible && <span>|</span>}
    </span>
  )
}

export default TypingTitle
