import React, { useEffect } from 'react'

const BubbleText: React.FC<{ text: string }> = ({ text }) => {
  useEffect(() => {
    const spans = document.querySelectorAll('.hover-text span')

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function (this: HTMLElement) {
        this.style.fontWeight = '900'
        this.style.color = 'rgb(238, 242, 255)'

        const leftNeighbor = this.previousElementSibling as HTMLElement
        const rightNeighbor = this.nextElementSibling as HTMLElement

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '800'
          leftNeighbor.style.color = 'rgb(199, 210, 254)'
        }
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '800'
          rightNeighbor.style.color = 'rgb(199, 210, 254)'
        }
      })

      span.addEventListener('mouseleave', function (this: HTMLElement) {
        this.style.fontWeight = '600'
        this.style.color = 'rgb(126, 49, 241)'

        const leftNeighbor = this.previousElementSibling as HTMLElement
        const rightNeighbor = this.nextElementSibling as HTMLElement

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '600'
          leftNeighbor.style.color = 'rgb(126, 49, 241)'
        }

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '600'
          rightNeighbor.style.color = 'rgb(126, 49, 241)'
        }
      })
    })
  }, [])

  return (
    <span className="hover-text -center cursor-pointer ">
      <Text>{text}</Text>
    </span>
  )
}

const Text: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      {children.split('').map((child, idx) => (
        <span
          style={{
            transition: '0.10s ease-in-out'
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  )
}

export default BubbleText
