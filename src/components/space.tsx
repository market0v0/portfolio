import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

interface Star {
  x: number
  y: number
  r: number
  depth: number
  phase: number
  speed: number
}

interface ShootingStar {
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

// Fixed, full-page canvas of twinkling stars with scroll parallax and the odd shooting star
export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas == null || ctx == null) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let stars: Star[] = []
    let shooting: ShootingStar | null = null
    let nextShot = performance.now() + 3000
    let frame = 0
    let width = 0
    let height = 0

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((width * height) / 5500)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        depth: Math.random() * 0.8 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 1.5 + 0.5
      }))
    }

    const draw = (now: number): void => {
      const dark = document.documentElement.classList.contains('dark')
      const rgb = dark ? '230, 220, 255' : '126, 49, 241'
      const scroll = window.scrollY
      ctx.clearRect(0, 0, width, height)

      for (const star of stars) {
        // Deeper stars move less on scroll: cheap parallax
        const y = (((star.y - scroll * star.depth * 0.15) % height) + height) % height
        const twinkle = reduceMotion ? 0.8 : 0.55 + 0.45 * Math.sin(now / 1000 * star.speed + star.phase)
        const alpha = twinkle * star.depth * (dark ? 0.9 : 0.35)
        ctx.beginPath()
        ctx.arc(star.x, y, star.r * star.depth + 0.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`
        ctx.fill()
      }

      if (!reduceMotion) {
        if (shooting == null && now > nextShot) {
          shooting = { x: Math.random() * width * 0.7, y: Math.random() * height * 0.4, vx: 9, vy: 3.5, life: 1 }
          nextShot = now + 5000 + Math.random() * 6000
        }
        if (shooting != null) {
          const s = shooting
          const tail = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12)
          tail.addColorStop(0, `rgba(${rgb}, ${0.9 * s.life})`)
          tail.addColorStop(1, `rgba(${rgb}, 0)`)
          ctx.strokeStyle = tail
          ctx.lineWidth = 1.6
          ctx.beginPath()
          ctx.moveTo(s.x, s.y)
          ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12)
          ctx.stroke()
          s.x += s.vx
          s.y += s.vy
          s.life -= 0.012
          if (s.life <= 0 || s.x > width || s.y > height) shooting = null
        }
      }

      frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className='pointer-events-none fixed inset-0 z-0' aria-hidden='true' />
}

// An astronaut that drifts and tumbles across the page as you scroll, and keeps
// moving on its own: a slow wander, waving arm, kicking legs, jetpack flames and
// a blinking antenna. Fast scrolling makes it tilt and wobble.
// Cursor: it shies away from the pointer, its visor glint follows it, it gets
// excited (faster wave, bigger flames) when you're close, and a click near it
// sends it into a spinning flip.
const CURSOR_RADIUS = 200

export const Astronaut: React.FC = () => {
  const bodyRef = useRef<HTMLDivElement>(null)
  const pushX = useSpring(0, { stiffness: 90, damping: 14 })
  const pushY = useSpring(0, { stiffness: 90, damping: 14 })
  const spin = useMotionValue(0)
  const lookX = useSpring(0, { stiffness: 200, damping: 20 })
  const lookY = useSpring(0, { stiffness: 200, damping: 20 })
  const [excited, setExcited] = useState(false)
  const [boosting, setBoosting] = useState(false)

  useEffect(() => {
    const centre = (): { x: number, y: number } | null => {
      const el = bodyRef.current
      if (el == null || el.offsetParent === null) return null
      const r = el.getBoundingClientRect()
      // Measure from where it would be without the push, so it doesn't chase its own tail
      return { x: r.left + r.width / 2 - pushX.get(), y: r.top + r.height / 2 - pushY.get() }
    }

    const onMove = (e: PointerEvent): void => {
      const c = centre()
      if (c == null) return
      const dx = c.x - e.clientX
      const dy = c.y - e.clientY
      const dist = Math.hypot(dx, dy) || 1
      // Glint drifts toward the cursor, within the visor
      lookX.set(Math.max(-1, Math.min(1, -dx / 300)) * 9)
      lookY.set(Math.max(-1, Math.min(1, -dy / 300)) * 6)
      if (dist < CURSOR_RADIUS) {
        const force = (1 - dist / CURSOR_RADIUS) * 110
        pushX.set((dx / dist) * force)
        pushY.set((dy / dist) * force)
        setExcited(true)
      } else {
        pushX.set(0)
        pushY.set(0)
        setExcited(false)
      }
    }

    const onClick = (e: MouseEvent): void => {
      const c = centre()
      if (c == null || Math.hypot(c.x - e.clientX, c.y - e.clientY) > CURSOR_RADIUS) return
      setBoosting(true)
      void animate(spin, spin.get() + 360, { duration: 0.9, ease: [0.22, 1, 0.36, 1] }).then(() => { setBoosting(false) })
    }

    const onLeave = (): void => {
      pushX.set(0); pushY.set(0); lookX.set(0); lookY.set(0); setExcited(false)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('click', onClick)
    document.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('click', onClick)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 40, damping: 18 })
  const x = useTransform(progress, [0, 0.2, 0.4, 0.6, 0.8, 1], ['86vw', '2vw', '88vw', '3vw', '87vw', '44vw'])
  const y = useTransform(progress, [0, 0.2, 0.4, 0.6, 0.8, 1], ['68vh', '30vh', '62vh', '24vh', '58vh', '70vh'])
  const rotate = useTransform(progress, [0, 0.5, 1], [-12, 200, 400])

  const velocity = useSpring(useVelocity(scrollY), { stiffness: 120, damping: 14 })
  const tilt = useTransform(velocity, [-3000, 0, 3000], [-35, 0, 35], { clamp: true })
  const stretch = useTransform(velocity, [-3000, 0, 3000], [1.08, 1, 1.08], { clamp: true })

  const suit = { fill: 'url(#astro-suit)', stroke: '#7E31F1', strokeWidth: 2 }

  return (
    <motion.div
      style={{ x, y, rotate }}
      className='pointer-events-none fixed left-0 top-0 z-0 hidden w-20 opacity-80 md:block lg:w-24 lg:opacity-90'
      aria-hidden='true'
    >
      <motion.div ref={bodyRef} style={{ x: pushX, y: pushY, rotate: spin }}>
      <motion.div style={{ rotate: tilt, scale: stretch }}>
        <div className='animate-astro-drift'>
          <div className='animate-astro-bob'>
            <svg viewBox='-10 -10 140 160' className={`astro h-auto w-full overflow-visible drop-shadow-[0_0_18px_rgba(126,49,241,0.55)] ${excited ? 'astro-excited' : ''} ${boosting ? 'astro-boost' : ''}`}>
              <defs>
                <linearGradient id='astro-visor' x1='0' y1='0' x2='1' y2='1'>
                  <stop offset='0%' stopColor='#2d1457' />
                  <stop offset='60%' stopColor='#7E31F1' />
                  <stop offset='100%' stopColor='#c4a5ff' />
                </linearGradient>
                <linearGradient id='astro-suit' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#ffffff' />
                  <stop offset='100%' stopColor='#ddd0fb' />
                </linearGradient>
                <linearGradient id='astro-flame' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#ffffff' />
                  <stop offset='35%' stopColor='#c4a5ff' />
                  <stop offset='100%' stopColor='#7E31F1' stopOpacity='0' />
                </linearGradient>
              </defs>

              {/* Jetpack flames */}
              <path className='astro-flame' d='M24 102 Q29 120 29 132 Q29 120 34 102 Z' fill='url(#astro-flame)' />
              <path className='astro-flame astro-flame-2' d='M86 102 Q91 120 91 132 Q91 120 96 102 Z' fill='url(#astro-flame)' />

              {/* Backpack */}
              <rect x='26' y='50' width='68' height='54' rx='14' fill='#b9a3f0' />

              {/* Arms */}
              <g className='astro-arm-left'>
                <rect x='8' y='64' width='30' height='15' rx='7.5' {...suit} transform='rotate(25 23 71)' />
              </g>
              <g className='astro-arm-right'>
                <rect x='82' y='46' width='30' height='15' rx='7.5' {...suit} transform='rotate(-45 97 53)' />
                <circle cx='106' cy='40' r='6' fill='#7E31F1' />
              </g>

              {/* Legs */}
              <g className='astro-leg-left'>
                <rect x='38' y='96' width='18' height='32' rx='9' {...suit} transform='rotate(8 47 112)' />
                <rect x='37' y='120' width='20' height='10' rx='5' fill='#7E31F1' transform='rotate(8 47 125)' />
              </g>
              <g className='astro-leg-right'>
                <rect x='64' y='96' width='18' height='32' rx='9' {...suit} transform='rotate(-12 73 112)' />
                <rect x='65' y='120' width='20' height='10' rx='5' fill='#7E31F1' transform='rotate(-12 75 125)' />
              </g>

              {/* Body */}
              <rect x='32' y='56' width='56' height='50' rx='18' {...suit} />
              <rect x='47' y='70' width='26' height='15' rx='4' fill='#2d1457' />
              <circle className='astro-led' cx='53' cy='77.5' r='2.4' fill='#34d399' />
              <circle className='astro-led astro-led-2' cx='60' cy='77.5' r='2.4' fill='#c4a5ff' />
              <circle className='astro-led astro-led-3' cx='67' cy='77.5' r='2.4' fill='#f472b6' />

              {/* Helmet */}
              <g className='astro-head'>
                <line x1='78' y1='14' x2='84' y2='3' stroke='#7E31F1' strokeWidth='2' strokeLinecap='round' />
                <circle className='astro-antenna' cx='85' cy='3' r='3.2' fill='#c4a5ff' />
                <circle cx='60' cy='36' r='28' {...suit} />
                <rect x='40' y='22' width='40' height='30' rx='14' fill='url(#astro-visor)' />
                <motion.g style={{ x: lookX, y: lookY }}>
                  <ellipse className='astro-shine' cx='50' cy='30' rx='6' ry='3.5' fill='#ffffff' opacity='0.75' transform='rotate(-25 50 30)' />
                </motion.g>
                <circle cx='70' cy='44' r='1.8' fill='#ffffff' opacity='0.6' />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Planets and a moon that pass by at different depths as you scroll.
// Each one is mapped to its own slice of the page so they appear in turn.
export const Planets: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const ringedY = useTransform(p, [0, 0.45], ['6vh', '-110vh'])
  const moonY = useTransform(p, [0.05, 0.55], ['115vh', '-45vh'])
  const giantY = useTransform(p, [0.35, 0.9], ['115vh', '-60vh'])
  const smallY = useTransform(p, [0.65, 1], ['115vh', '22vh'])

  const layer = 'pointer-events-none fixed z-0 opacity-40 dark:opacity-70 md:opacity-60 md:dark:opacity-95'

  return (
    <div aria-hidden='true'>
      {/* Ringed planet with its own little moon */}
      <motion.div style={{ y: ringedY }} className={`${layer} -right-16 top-0 w-56 md:-right-10 md:w-80`}>
        <div className='animate-planet-float'>
          <svg viewBox='0 0 300 220' className='h-auto w-full overflow-visible drop-shadow-[0_0_40px_rgba(126,49,241,0.45)]'>
            <defs>
              <radialGradient id='ringed-body' cx='35%' cy='30%' r='75%'>
                <stop offset='0%' stopColor='#d8c7ff' />
                <stop offset='45%' stopColor='#8b5cf6' />
                <stop offset='100%' stopColor='#1e0b3a' />
              </radialGradient>
              <linearGradient id='ringed-ring' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='0%' stopColor='#c4b5fd' stopOpacity='0.1' />
                <stop offset='50%' stopColor='#e9d5ff' stopOpacity='0.85' />
                <stop offset='100%' stopColor='#c4b5fd' stopOpacity='0.1' />
              </linearGradient>
              <clipPath id='ringed-clip'><circle cx='150' cy='110' r='70' /></clipPath>
            </defs>
            <g transform='rotate(-18 150 110)'>
              <path d='M8 110 A142 32 0 0 1 292 110' fill='none' stroke='url(#ringed-ring)' strokeWidth='9' />
              <path d='M24 110 A126 26 0 0 1 276 110' fill='none' stroke='url(#ringed-ring)' strokeWidth='3' opacity='0.6' />
            </g>
            <circle cx='150' cy='110' r='70' fill='url(#ringed-body)' />
            <g clipPath='url(#ringed-clip)'>
              <g className='planet-bands'>
                {[0, 1].map((copy) => (
                  <g key={copy} transform={`translate(${copy * 160} 0)`}>
                    <rect x='60' y='72' width='160' height='9' rx='4.5' fill='#ffffff' opacity='0.14' />
                    <rect x='40' y='96' width='160' height='14' rx='7' fill='#2e1065' opacity='0.28' />
                    <rect x='70' y='122' width='160' height='7' rx='3.5' fill='#ffffff' opacity='0.12' />
                    <rect x='50' y='140' width='160' height='11' rx='5.5' fill='#2e1065' opacity='0.25' />
                  </g>
                ))}
              </g>
              <circle cx='150' cy='110' r='70' fill='url(#planet-shade)' />
            </g>
            <g transform='rotate(-18 150 110)'>
              <path d='M8 110 A142 32 0 0 0 292 110' fill='none' stroke='url(#ringed-ring)' strokeWidth='9' />
              <path d='M24 110 A126 26 0 0 0 276 110' fill='none' stroke='url(#ringed-ring)' strokeWidth='3' opacity='0.6' />
            </g>
            <g className='planet-orbit'>
              <circle cx='150' cy='4' r='7' fill='#ede9fe' />
              <circle cx='148' cy='2' r='2' fill='#c4b5fd' />
            </g>
            <defs>
              <radialGradient id='planet-shade' cx='30%' cy='25%' r='85%'>
                <stop offset='55%' stopColor='#000000' stopOpacity='0' />
                <stop offset='100%' stopColor='#0a0614' stopOpacity='0.75' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Moon */}
      <motion.div style={{ y: moonY }} className={`${layer} -left-6 top-0 w-28 md:left-6 md:w-40`}>
        <div className='animate-planet-float [animation-delay:-4s]'>
          <svg viewBox='0 0 100 100' className='h-auto w-full drop-shadow-[0_0_30px_rgba(221,214,254,0.45)]'>
            <defs>
              <radialGradient id='moon-body' cx='38%' cy='32%' r='70%'>
                <stop offset='0%' stopColor='#faf5ff' />
                <stop offset='55%' stopColor='#d4c8f5' />
                <stop offset='100%' stopColor='#7c6aa8' />
              </radialGradient>
              <radialGradient id='moon-crater' cx='40%' cy='35%' r='60%'>
                <stop offset='0%' stopColor='#9f8fcf' />
                <stop offset='100%' stopColor='#c9bdf0' />
              </radialGradient>
              <linearGradient id='moon-night' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='45%' stopColor='#0a0614' stopOpacity='0' />
                <stop offset='100%' stopColor='#0a0614' stopOpacity='0.65' />
              </linearGradient>
            </defs>
            <circle cx='50' cy='50' r='44' fill='url(#moon-body)' />
            <circle cx='34' cy='36' r='8' fill='url(#moon-crater)' />
            <circle cx='60' cy='28' r='4.5' fill='url(#moon-crater)' />
            <circle cx='58' cy='58' r='11' fill='url(#moon-crater)' />
            <circle cx='30' cy='64' r='5' fill='url(#moon-crater)' />
            <circle cx='72' cy='44' r='3' fill='url(#moon-crater)' />
            <circle cx='44' cy='80' r='3.5' fill='url(#moon-crater)' />
            <circle cx='50' cy='50' r='44' fill='url(#moon-night)' />
          </svg>
        </div>
      </motion.div>

      {/* Gas giant */}
      <motion.div style={{ y: giantY }} className={`${layer} -right-12 top-0 w-48 md:right-4 md:w-64`}>
        <div className='animate-planet-float [animation-delay:-8s]'>
          <svg viewBox='0 0 200 200' className='h-auto w-full overflow-visible drop-shadow-[0_0_45px_rgba(236,72,153,0.35)]'>
            <defs>
              <radialGradient id='giant-body' cx='35%' cy='30%' r='75%'>
                <stop offset='0%' stopColor='#fbcfe8' />
                <stop offset='40%' stopColor='#c026d3' />
                <stop offset='100%' stopColor='#1e1b4b' />
              </radialGradient>
              <radialGradient id='giant-atmo' cx='50%' cy='50%' r='50%'>
                <stop offset='80%' stopColor='#f0abfc' stopOpacity='0' />
                <stop offset='92%' stopColor='#f0abfc' stopOpacity='0.35' />
                <stop offset='100%' stopColor='#f0abfc' stopOpacity='0' />
              </radialGradient>
              <clipPath id='giant-clip'><circle cx='100' cy='100' r='72' /></clipPath>
            </defs>
            <circle cx='100' cy='100' r='88' fill='url(#giant-atmo)' />
            <circle cx='100' cy='100' r='72' fill='url(#giant-body)' />
            <g clipPath='url(#giant-clip)'>
              <g className='planet-bands planet-bands-slow'>
                {[0, 1].map((copy) => (
                  <g key={copy} transform={`translate(${copy * 170} 0)`}>
                    <path d='M10 62 Q60 52 110 62 T210 62' stroke='#fdf4ff' strokeWidth='6' fill='none' opacity='0.18' />
                    <path d='M0 90 Q55 100 110 90 T220 90' stroke='#3b0764' strokeWidth='12' fill='none' opacity='0.3' />
                    <path d='M20 118 Q70 108 120 118 T220 118' stroke='#fdf4ff' strokeWidth='5' fill='none' opacity='0.15' />
                    <ellipse cx='120' cy='138' rx='16' ry='7' fill='#831843' opacity='0.45' />
                  </g>
                ))}
              </g>
              <circle cx='100' cy='100' r='72' fill='url(#planet-shade)' />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* Small teal planet */}
      <motion.div style={{ y: smallY }} className={`${layer} left-2 top-0 w-20 md:left-[8vw] md:w-28`}>
        <div className='animate-planet-float [animation-delay:-2s]'>
          <svg viewBox='0 0 100 100' className='h-auto w-full drop-shadow-[0_0_28px_rgba(45,212,191,0.4)]'>
            <defs>
              <radialGradient id='small-body' cx='35%' cy='30%' r='75%'>
                <stop offset='0%' stopColor='#ccfbf1' />
                <stop offset='45%' stopColor='#14b8a6' />
                <stop offset='100%' stopColor='#134e4a' />
              </radialGradient>
            </defs>
            <circle cx='50' cy='50' r='38' fill='url(#small-body)' />
            <circle cx='38' cy='42' r='6' fill='#0f766e' opacity='0.45' />
            <circle cx='60' cy='60' r='9' fill='#0f766e' opacity='0.4' />
            <circle cx='62' cy='34' r='3' fill='#0f766e' opacity='0.4' />
            <circle cx='50' cy='50' r='38' fill='url(#planet-shade)' />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
