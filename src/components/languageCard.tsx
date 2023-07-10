import { type Technology } from '@/pages/api/data'
import React from 'react'

interface CardProps {
  tech: Technology
  num: number
}
const LanguageCard: React.FC<CardProps> = CardProps => {
  return (
    <div>
      <div className=' flex overflow-hidden  '>
        <div
          className=' h-[14.25rem] w-[100%] max-w-[30rem] flex-col  bg-black  hover:shadow-xl'
          style={{
            background: "url('" + CardProps.tech.img + "')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='  leading-[7rem]'>
            <div
              className='   pt-6 text-[16.25rem] font-[700] tracking-[-1rem] text-[#ffffff4f]   opacity-40'
              /*               style={{ WebkitTextStroke: '2px ##ffffff4f' }} */
            >
              {CardProps.num.toString().padStart(2, '0')}
            </div>
            <div className=' font-poppins item-end text-center font-[600] text-[#ffffffcd] sm:text-[1.5rem]'>
              {CardProps.tech.techs}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageCard
