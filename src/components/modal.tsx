// Modal.tsx
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
