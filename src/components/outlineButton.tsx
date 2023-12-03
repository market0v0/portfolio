import React from 'react'

interface OutlineButtonProps {
  buttontext: string
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ buttontext }) => {
  return (
    <div>
      <DrawOutlineButton>{buttontext}</DrawOutlineButton>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const DrawOutlineButton = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>) => {
  return (
    <button
      {...rest}
      className='group relative px-4 py-2 backdrop-blur-sm bg-[#0e021f96]   text-orange-0 transition-colors duration-[400ms] hover:text-primary'
    >
      <span>{children}</span>

      {/* TOP */}
      <span className='absolute left-0 top-0 h-[2px] w-0 bg-primary rounded-lg transition-all duration-100 group-hover:w-full' />

      {/* RIGHT */}
      <span className='absolute right-0 top-0 h-0 w-[2px] bg-primary rounded-lg transition-all delay-100 duration-100 group-hover:h-full' />

      {/* BOTTOM */}
      <span className='absolute bottom-0 right-0 h-[2px] w-0 bg-primary rounded-lg transition-all delay-200 duration-100 group-hover:w-full' />

      {/* LEFT */}
      <span className='absolute bottom-0 left-0 h-0 w-[2px] bg-primary rounded-lg transition-all delay-300 duration-100 group-hover:h-full' />
    </button>
  )
}

export default OutlineButton
