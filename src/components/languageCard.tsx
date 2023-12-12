import { type Technology } from '@/pages/api/data'
import React from 'react'

interface CardProps {
  tech: Technology
  num: number
}
const LanguageCard: React.FC<CardProps> = CardProps => {
  return (
    <div className='w-[100%] '>
      <div className=' bg-bgcolor border-2  border-slate-900 rounded-xl'>
        <div
          className='flex overflow-hidden  items-center border-2 border-black rounded-lg h-[8rem] md:h-[20rem]  justify-center flex-col hover:shadow-xl  w-[90%]'
          style={{
            background: "url('" + CardProps.tech.img + "')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className='  '>
            <div className='pt-16   text-[4.5rem] font-[700] sm:tracking-[.5rem] tracking-[.1rem] text-[#ffffff4f] opacity-40  md:text-[9.25rem] lg:text-[13.25rem]'>
              {CardProps.num.toString().padStart(2, '0')}
            </div>
           {/*  <div className='font-poppins item-end text-center text-[.7rem] font-[600]  sm:text-[1rem]'>
              {CardProps.tech.techs}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageCard
