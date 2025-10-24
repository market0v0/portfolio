import React from 'react'
import AnimatedSection from '../PageAnimation'

interface TrainingProps {
  img: string
  label: string
  date: string
  body: string
  images: string[]
}

const Training: React.FC<TrainingProps> = ({ label, img, images, date, body }) => {
  return (
    <AnimatedSection>
      <div className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-light-border  p-6 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:shadow-glass dark:border-glass-border dark:bg-glass-gradient dark:shadow-none'>
        {/* Glass shine effect */}
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5' />

        <div className='relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-light-border bg-white/50 p-3 backdrop-blur-xl dark:border-glass-border dark:bg-dark-card/50'>
          <img src={img} alt={label} className='h-full w-full object-contain' />
        </div>

        <h4 className='relative z-10 mb-2 text-[1.1rem] font-semibold text-light-text dark:text-dark-text'>{label}</h4>

        <p className='relative z-10 mb-4 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary'>{date}</p>

        <p className='relative z-10 text-[0.95rem] leading-relaxed text-light-text-secondary dark:text-dark-text-secondary'>{body}</p>
      </div>
    </AnimatedSection>
  )
}

export default Training
