import React, { type ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CYCLES_PER_LETTER = 2
const SHUFFLE_TIME = 50

const CHARS = 'IMYTINAMUCH'

interface EncryptButtonProps {
  label: string
  children?: ReactNode
}

const EncryptButton: React.FC<EncryptButtonProps> = ({ label, children }) => {
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  const [text, setText] = useState(label)

  const scramble = (): void => {
    let pos = 0

    intervalRef.current = setInterval(() => {
      const scrambled = label.split('').map((char, index) => {
        if (pos / CYCLES_PER_LETTER > index) {
          return char
        }

        const randomCharIndex = Math.floor(Math.random() * CHARS.length)
        const randomChar = CHARS[randomCharIndex]

        return randomChar
      }).join('')

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

  return (
    <motion.div
      whileHover={{
        scale: 1.025
      }}
      whileTap={{
        scale: 0.975
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500  px-4 py-2 font-mono font-medium uppercase  transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
      <motion.div
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
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.div>
  )
}

export default EncryptButton
