import { message } from 'antd'
import React from 'react'

interface ContactInfo {
  iconSrc: string
  text: string
  textToCopy: string
  type: string // Add a type property
}

const Contacts: React.FC = () => {
  const contactInfoList: ContactInfo[] = [
    { iconSrc: '/phone.svg', text: '+63 968 650 6973', textToCopy: '09686506973', type: 'phone' },
    { iconSrc: '/mail.svg', text: 'cuevamarkvincent@gmail.com', textToCopy: 'cuevamarkvincent@gmail.com', type: 'email' },
    { iconSrc: '/link.svg', text: 'Mark Vincent Cueva', textToCopy: 'https://www.linkedin.com/in/mark-vincent-cueva-673522275/', type: 'link' }
  ]

  const handleCopyToClipboard = (textToCopy: string, type: string): void => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        let successMessage = 'Copied Successfully'

        if (type === 'phone') {
          successMessage = 'Copied phone number'
        } else if (type === 'email') {
          successMessage = 'Copied email address'
        } else if (type === 'link') {
          successMessage = 'Copied LinkedIn profile link'
        }

        void message.success(successMessage)
      })
      .catch((error) => {
        console.error('Unable to copy text:', error)
      })
  }

  return (
    <div className=''>
      <div className='gap-4 flex sm:items-center justify-center cursor-pointer pt-2'>
        {contactInfoList.map((info, index) => (
          <div
            key={index}
            className='flex py-2 text-[.8rem] leading-[2rem]'
            onClick={() => { handleCopyToClipboard(info.textToCopy, info.type) }}
          >
            <span>
              <img src={info.iconSrc} alt='icon' width='30' height='100%' />
            </span>
            <span className='px-2 text-primary sm:block hidden'>
              <a target='_blank' rel='noreferrer'>
                {info.text}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts
