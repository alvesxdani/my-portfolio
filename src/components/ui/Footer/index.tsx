'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import { FaLinkedin } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import useWindowSize from '@/Hooks/useWindowSize'

const Footer = () => {
  const { width } = useWindowSize()
  const [show, setShow] = useState(true)

  useEffect(() => {
    function handleSize() {
      if (width <= 976) {
        setShow(false)
      }
      if (width >= 976) {
        setShow(true)
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
    <footer className="w-[100%] bg-[#222] flex flex-col items-center align-middle justify-center gap-10 p-10 lg:gap-16 lg:h-[240px] lg:flex-row box-border">
      <Logo />
      <div className="h-[120px] w-[4px] bg-neutral-700 hidden lg:block"></div>
      <ul className="flex flex-col justify-around h-[120px] text-white text-lg font-bold font-lato">
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
      </ul>
      <div className="col flex-col gap-3 text-white font-bold text-lg font-lato">
        <p>Contato:</p>
        <a href="mailto:daniela.alvesm@outlook.com.br">
          daniela.alvesm@outlook.com.br
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 md:gap-5 text-white font-bold text-lg font-lato">
        <p>Encontre-me:</p>
        <div className="flex gap-16">
          <a href="http://linkedin.com/in/daniela-alvesm" target="_blank">
            <FaLinkedin
              size={30}
              className="text-maincolor hover:brightness-110"
            />
          </a>
          <a href="https://wa.me/5521983055922" target="_blank">
            <FaWhatsapp
              size={30}
              className="text-maincolor hover:brightness-110"
            />
          </a>
          <a href="https://github.com/alvesxdani" target="_blank">
            <FiGithub
              size={30}
              className="text-maincolor hover:brightness-110"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
