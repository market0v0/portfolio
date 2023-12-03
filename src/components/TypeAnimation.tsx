import React, { useState, useEffect } from 'react'
import CursorAnimation from './CursorEffect'
interface TypingTitleProps {
  titles: string[]
}

const TypingTitle: React.FC<TypingTitleProps> = ({ titles }) => {
  const [titleIndex, setTitleIndex] = useState(0)
  const [title, setTitle] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTyping) {
      let charIndex = 0
      setTitle('')

      timer = setInterval(() => {
        if (charIndex <= titles[titleIndex].length) {
          setTitle(prevTitle => titles[titleIndex].slice(0, charIndex))
          charIndex++
        } else {
          setIsTyping(false)
          clearInterval(timer)
          setTimeout(() => {
            setIsTyping(true)
            setTitle('')
            setTitleIndex(prevIndex => (prevIndex + 1) % titles.length)
          }, 4000)
        }
      }, 240)
    } else {
      let charIndex = titles[titleIndex].length

      timer = setInterval(() => {
        if (charIndex >= 0) {
          setTitle(titles[titleIndex].slice(0, charIndex))
          charIndex--
        } else {
          clearInterval(timer)
          setTimeout(() => {
            setIsTyping(true)
          }, 2000)
        }
      }, 240)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isTyping, titleIndex])

  return <span>{title}<span className='font-thin'>
  <CursorAnimation />
</span></span>
}

export default TypingTitle
