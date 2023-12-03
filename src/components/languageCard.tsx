import { type Technology } from '@/pages/api/data'
import React from 'react'

interface CardProps {
  tech: Technology
  num: number
}
const LanguageCard: React.FC<CardProps> = CardProps => {
  return (
    <div>
      <div className=''>
        <div
          className='flex  items-center h-[8rem] sm:h-[10rem]  justify-center flex-col hover:shadow-xl  w-[90%]'
          style={{
            background: "url('" + CardProps.tech.img + "')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='  '>
            <div className='pt-16   text-[6.5rem] font-[700] tracking-[-1rem] text-[#ffffff4f] opacity-40   sm:text-[10.25rem]'>
              {CardProps.num.toString().padStart(2, '0')}
            </div>
            <div className='font-poppins item-end text-center text-[.7rem] font-[600]  sm:text-[1rem]'>
              {CardProps.tech.techs}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageCard
