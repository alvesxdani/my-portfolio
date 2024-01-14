import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  size: 'md' | 'lg'
  mode?: "normal" | "outline"
}
const Button = ({ children, type, size, mode="normal", onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-lato rounded-md flex items-center justify-center gap-3 ${size === 'md' ? 'px-3.5 py-1.5' : 'px-4 py-2'} ${mode === 'normal' ? 'bg-maincolor text-white' : 'bg-transparent border border-maincolor text-maincolor'} hover:transition hover:brightness-110 font-bold`}
    >
      {children}
    </button>
  )
}

export default Button
