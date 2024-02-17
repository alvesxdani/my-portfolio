'use client'
import useWindowSize from '@/Hooks/useWindowSize'
import { useEffect, useState } from 'react'
import Logo from '../ui/Logo'

const Header = (): JSX.Element => {
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    function handleSize() {
      if (width <= 768) {
        setIsOpen(false)
      }
      if (width >= 768) {
        setIsOpen(true)
      }
    }
    if (typeof window !== 'undefined') {
      handleSize() // Executar a lógica apenas no lado do cliente
      window.addEventListener('resize', handleSize)

      return () => {
        window.removeEventListener('resize', handleSize)
      }
    }
  }, [width])

  return (
    <header
      className={
        'bg-[#222] px-[3rem] pt-[0.5rem] flex flex-row items-center justify-between w-full min-h-[94px] sticky top-0 font-lato flex-wrap md:flex-nowrap z-50'
      }
    >
      <div className="w-9 h-[43px]">
        <Logo />
      </div>

      <button
        onClick={handleClick}
        className="flex md:hidden border rounded-sm justify-center items-center"
      >
        <span className="menu-icon"></span>
      </button>

      {isOpen && (
        <ul
          className={`w-[100%] flex flex-col m-4 gap-2 md:m-0 md:flex-row md:gap-[3rem] md:items-center md:justify-center md:w-auto font-opensans text-white bg-[#222] text-center text-sm`}
        >
          <li className="hover:text-maincolor transition-all">
            <a href="/">HOME</a>
          </li>
          <li className="hover:text-maincolor transition-all">
            <a href="#sobre">SOBRE</a>
          </li>
          <li className="hover:text-maincolor transition-all">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="hover:text-maincolor transition-all">
            <a href="#projetos">PROJETOS</a>
          </li>
          {width <= 768 && (
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          )}
        </ul>
      )}
      <a href="#contato" className="hidden md:block">
        <button className="bg-white rounded-[0.3rem] pt-[0.5rem] pr-4 pb-[0.5rem] pl-4 hidden md:flex flex-row gap-3 items-center align-middle justify-center font-lato font-bold">
          <svg
            className="w-[15px] h-4 overflow-visible"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 7.1999H4.25C4.05109 7.1999 3.86032 7.28418 3.71967 7.43421C3.57902 7.58424 3.5 7.78772 3.5 7.99989C3.5 8.21206 3.57902 8.41554 3.71967 8.56557C3.86032 8.71559 4.05109 8.79988 4.25 8.79988H8.75C8.94891 8.79988 9.13968 8.71559 9.28033 8.56557C9.42098 8.41554 9.5 8.21206 9.5 7.99989C9.5 7.78772 9.42098 7.58424 9.28033 7.43421C9.13968 7.28418 8.94891 7.1999 8.75 7.1999ZM11.75 3.99994H4.25C4.05109 3.99994 3.86032 4.08423 3.71967 4.23426C3.57902 4.38428 3.5 4.58776 3.5 4.79993C3.5 5.0121 3.57902 5.21558 3.71967 5.36561C3.86032 5.51564 4.05109 5.59992 4.25 5.59992H11.75C11.9489 5.59992 12.1397 5.51564 12.2803 5.36561C12.421 5.21558 12.5 5.0121 12.5 4.79993C12.5 4.58776 12.421 4.38428 12.2803 4.23426C12.1397 4.08423 11.9489 3.99994 11.75 3.99994ZM13.25 0H2.75C2.15326 0 1.58097 0.252853 1.15901 0.702934C0.737053 1.15302 0.5 1.76346 0.5 2.39997V10.3999C0.5 11.0364 0.737053 11.6468 1.15901 12.0969C1.58097 12.547 2.15326 12.7998 2.75 12.7998H11.4425L14.2175 15.7678C14.2876 15.8419 14.3707 15.9006 14.4621 15.9404C14.5534 15.9802 14.6513 16.0004 14.75 15.9998C14.8484 16.0025 14.946 15.9806 15.035 15.9358C15.172 15.8758 15.2892 15.7738 15.372 15.6429C15.4547 15.5119 15.4993 15.3577 15.5 15.1998V2.39997C15.5 1.76346 15.2629 1.15302 14.841 0.702934C14.419 0.252853 13.8467 0 13.25 0ZM14 13.2718L12.2825 11.4318C12.2124 11.3577 12.1293 11.299 12.0379 11.2592C11.9466 11.2194 11.8487 11.1992 11.75 11.1998H2.75C2.55109 11.1998 2.36032 11.1156 2.21967 10.9655C2.07902 10.8155 2 10.612 2 10.3999V2.39997C2 2.1878 2.07902 1.98432 2.21967 1.83429C2.36032 1.68426 2.55109 1.59998 2.75 1.59998H13.25C13.4489 1.59998 13.6397 1.68426 13.7803 1.83429C13.921 1.98432 14 2.1878 14 2.39997V13.2718Z"
              fill="black"
            />
          </svg>
          {'Contato'}
        </button>
      </a>
    </header>
  )
}

export default Header
