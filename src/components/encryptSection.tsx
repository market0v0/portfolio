import React, { type ReactNode, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const CYCLES_PER_LETTER = 1
const SHUFFLE_TIME = 30

interface EncryptButtonProps {
  label: string
  children?: ReactNode
  CHARS: string
}

const EncryptSection: React.FC<EncryptButtonProps> = ({ CHARS, label, children }) => {
  const intervalRef = useRef<NodeJS.Timer | null>(null)
  const [text, setText] = useState(label)

  const scramble = (): void => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = label
        .split('')
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length)
          const randomChar = CHARS[randomCharIndex]

          return randomChar
        })
        .join('')

      setText(scrambled)
      pos++

      if (pos >= label.length * CYCLES_PER_LETTER) {
        stopScramble()
      }
    }, SHUFFLE_TIME)
  }

  const stopScramble = (): void => {
    clearInterval(intervalRef.current as NodeJS.Timer)
    setText(label)
  }

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      scramble()
    } else {
      stopScramble()
    }
  }, [inView])

  return (
    <motion.span
      ref={(element) => {
        ref(element)
      }}

      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 1, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
            ease: 'easeOut'
          }
        }
      }}
      className="group "
    >
      <span className=" ">
        <span>{text}</span>
      </span>
      <motion.span
        initial={{
          y: '100%'
        }}
        animate={{
          y: '-100%'
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1,
          ease: 'linear'
        }}
        className="duration-300 "
      />
    </motion.span>
  )
}

export default EncryptSection
