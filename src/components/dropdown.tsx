// components/DropdownParent.tsx
import React, { type ReactNode, useState } from 'react'

interface DropdownParentProps {
  children: ReactNode
  label: string // Fixed the typo here
}

const DropdownParent: React.FC<DropdownParentProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className=" text-[.8rem]">
      <button onClick={toggleDropdown}>{label}</button>
      {isOpen && (
        <div className="absolute top-full right-0 bg-black p-2 border border-gray-700 rounded">
          {children}
        </div>
      )}
    </div>
  )
}

export default DropdownParent
