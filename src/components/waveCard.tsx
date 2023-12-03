import React, { type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface WaveCardProps {
  text: string
  children: ReactNode
}

const WaveCard: React.FC<WaveCardProps> = ({ text, children }: WaveCardProps) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = (): any => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d'
      }}
      className="relative min-h-[10rem] w-full rounded-xl bg-gradient-to-br "
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg"
      >
        <div
          style={{
            transform: 'translateZ(50px)'
          }}
          className="from-indigo-500   to-violet-500 px-4 py-12 text-center text-2xl font-bold"
        >

          {children}
        </div>

      </div>
    </motion.div>
  )
}

export default WaveCard
