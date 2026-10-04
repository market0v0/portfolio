import React, { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Animates the leading number of a value like "2.5+" when it scrolls into view.
// Non-numeric values ("Senior") render unchanged.
const CountUp: React.FC<{ value: string, duration?: number }> = ({ value, duration = 1.4 }) => {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value)
  const target = match != null ? parseFloat(match[1]) : 0
  const suffix = match != null ? match[2] : ''
  const decimals = match?.[1].split('.')[1]?.length ?? 0
  const from = target >= 1000 ? target - 25 : 0

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (!inView || match == null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target)
      return
    }
    const controls = animate(from, target, { duration, ease: 'easeOut', onUpdate: setDisplay })
    return () => { controls.stop() }
  }, [inView])

  if (match == null) return <span>{value}</span>
  return <span ref={ref} className='tabular-nums'>{display.toFixed(decimals)}{suffix}</span>
}

export default CountUp
