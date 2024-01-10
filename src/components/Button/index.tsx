import React, { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  size: 'md' | 'lg'
}>
const Button = ({ children, type, size, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-maincolor font-lato text-white rounded-md flex items-center justify-center gap-3 ${size === 'md' ? 'px-3.5 py-1.5' : 'px-4 py-2'}`}
    >
      {children}
    </button>
  )
}

export default Button
