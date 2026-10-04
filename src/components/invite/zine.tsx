import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

// Shared look for the private /invite pages: a yellow zine / collage style that is
// deliberately different from the portfolio's purple glass.

// Fonts for the zine pages (loaded only on these pages)
export const ZineHead: React.FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name='robots' content='noindex, nofollow' />
    <meta name='theme-color' content='#FFD60A' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
    <link href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=Caveat:wght@600;700&family=Space+Grotesk:wght@400;500;700&display=swap' rel='stylesheet' />
  </Head>
)

export const bodyFont = { fontFamily: "'Space Grotesk', system-ui, sans-serif" }

export const display = { fontFamily: "'Archivo Black', 'Arial Black', sans-serif" }
export const hand = { fontFamily: "'Caveat', 'Comic Sans MS', cursive" }

export const hardShadow = 'shadow-[5px_5px_0_#111]'
export const inputCls = `w-full border-[2.5px] border-ink bg-paper px-4 py-3 text-[1rem] text-ink outline-none transition-all placeholder:text-ink/40 focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-[6px_6px_0_#7E31F1] ${hardShadow}`
export const chipCls = (active: boolean): string =>
  `border-[2.5px] border-ink px-3.5 py-2 text-sm font-bold transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0.5 ${active ? 'bg-ink text-sun shadow-[3px_3px_0_#7E31F1] -rotate-1' : 'bg-paper text-ink shadow-[3px_3px_0_#111] hover:bg-white'}`
// Black "ink" button. inkBtnMotion is for framer-motion buttons: it only eases shadow and
// opacity, because a CSS transform transition fights motion's per-frame transforms (stutter).
export const inkBtnBase = 'border-[2.5px] border-ink bg-ink px-7 py-3.5 text-base font-bold text-sun shadow-[5px_5px_0_#7E31F1] hover:shadow-[7px_7px_0_#7E31F1] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-[5px_5px_0_#7E31F1]'
export const inkBtnMotion = `${inkBtnBase} transition-[box-shadow,opacity] duration-200`
export const inkBtn = `${inkBtnBase} transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0`

export const Label: React.FC<{ children: React.ReactNode, htmlFor?: string }> = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className='mb-2 block text-sm font-bold uppercase tracking-widest text-ink'>{children}</label>
)

// Hand-drawn bits -----------------------------------------------------------

export const Star: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 50 50' className={className} aria-hidden='true'>
    <path d='M25 3 L30 19 L47 20 L33 30 L38 47 L25 37 L12 47 L17 30 L3 20 L20 19 Z' fill='currentColor' stroke='#111' strokeWidth='2.5' strokeLinejoin='round' />
  </svg>
)

export const Squiggle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox='0 0 160 30' className={className} fill='none' aria-hidden='true'>
    <path d='M3 18 C 18 2, 30 30, 45 15 S 70 2, 85 16 S 112 30, 125 14 S 148 4, 157 15' stroke='#111' strokeWidth='3.5' strokeLinecap='round' />
  </svg>
)

export const Tape: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute h-7 w-24 bg-[#f5e6b8]/80 shadow-sm [clip-path:polygon(3%_0,97%_6%,100%_95%,0_100%)] ${className ?? ''}`} aria-hidden='true' />
)

// Rotating circular sticker
export const SpinSticker: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`pointer-events-none ${className ?? ''}`} aria-hidden='true'>
    <svg viewBox='0 0 120 120' className='h-full w-full animate-[spin_14s_linear_infinite]'>
      <defs>
        <path id='sticker-circle' d='M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0' />
      </defs>
      <circle cx='60' cy='60' r='57' fill='#7E31F1' stroke='#111' strokeWidth='3' />
      <text fontSize='13.5' fontWeight='800' letterSpacing='2.2' fill='#FFD60A' style={display}>
        <textPath href='#sticker-circle'>NO PRESSURE ✦ NO PRESSURE ✦ </textPath>
      </text>
      <text x='60' y='70' textAnchor='middle' fontSize='30' fill='#FFD60A'>☺</text>
    </svg>
  </div>
)

// Scattered collage pieces behind the content
export const Collage: React.FC = () => (
  <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
    {/* Halftone dots */}
    <div className='absolute inset-0 opacity-[0.13] [background-image:radial-gradient(#111_1.3px,transparent_1.4px)] [background-size:18px_18px]' />
    {/* Giant outlined word */}
    <div className='absolute -bottom-10 -left-4 select-none text-[22vw] leading-none text-transparent [-webkit-text-stroke:2px_rgba(17,17,17,0.12)] lg:text-[17vw]' style={display}>
      HELLO
    </div>

    {/* Torn paper note */}
    <motion.div
      initial={{ opacity: 0, rotate: -14, x: -30 }}
      animate={{ opacity: 1, rotate: -6, x: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.35 }}
      className='absolute right-[7%] top-[40%] hidden w-56 bg-[#FF6B9D] px-5 py-6 text-ink [clip-path:polygon(0_4%,8%_0,20%_3%,33%_0,47%_4%,60%_0,74%_3%,88%_0,100%_4%,98%_100%,84%_96%,70%_100%,55%_96%,40%_100%,26%_96%,12%_100%,2%_96%)] xl:block'
    >
      <p className='text-[1.7rem] leading-tight' style={hand}>coffee, call or zoom ~ your pick!</p>
    </motion.div>

    {/* Blue scrap with tape */}
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, rotate: 9 }}
      transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.5 }}
      className='absolute bottom-[12%] right-[10%] hidden h-24 w-36 border-[2.5px] border-ink bg-[#3A86FF] lg:block'
    >
      <Tape className='-left-6 top-2 w-16 -rotate-45' />
      <p className='flex h-full items-center justify-center text-3xl text-paper' style={hand}>Cebu, PH</p>
    </motion.div>

    <SpinSticker className='absolute right-[8%] top-[12%] hidden h-24 w-24 lg:block lg:h-32 lg:w-32' />

    <Star className='absolute right-[30%] top-[6%] h-10 w-10 animate-[spin_9s_linear_infinite] text-[#FF6B9D]' />
    <Star className='absolute bottom-[34%] right-[26%] hidden h-8 w-8 animate-[bounce_3s_ease-in-out_infinite] text-paper xl:block' />
    <Star className='absolute bottom-[8%] right-[34%] h-7 w-7 text-[#7E31F1]' />
    <Squiggle className='absolute left-[30%] top-[4%] hidden w-40 rotate-[-6deg] md:block' />
    <Squiggle className='absolute bottom-[4%] right-[8%] w-32 rotate-[8deg]' />
  </div>
)

// Marker circle drawn around a word
export const Scribble: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className='relative inline-block'>
    <span className='relative z-10'>{children}</span>
    <svg viewBox='0 0 300 110' preserveAspectRatio='none' className='absolute -inset-x-[8%] -inset-y-[22%] z-0 h-[144%] w-[116%]' aria-hidden='true'>
      <motion.path
        d='M150 8 C 60 6, 8 30, 12 58 C 16 92, 110 104, 190 100 C 268 96, 296 70, 288 44 C 280 16, 210 4, 120 12'
        fill='none'
        stroke='#7E31F1'
        strokeWidth='6'
        strokeLinecap='round'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: 'easeInOut' }}
      />
    </svg>
  </span>
)
