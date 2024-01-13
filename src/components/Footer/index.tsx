"use client"
import React from 'react'
import Logo from '../Logo'
import { FaLinkedin } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import useWindowSize from '@/Hooks/useWindowSize'

const Footer = () => {
  const {width} = useWindowSize()

  return (
    <div className='bg-[#222] md:h-[240px] flex flex-col md:flex-row items-center align-middle justify-center gap-10 md:gap-16 p-10'>
      <Logo />
      {width >= 768 && (
        <div className="h-[120px] w-[4px] bg-neutral-700"></div>
      )}
        <ul className='flex flex-col justify-around h-[120px] text-white text-lg font-bold font-lato'>
          <li><a href="/">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
        <div className='col flex-col gap-3 text-white font-bold text-lg font-lato'>
          <p>Contato:</p>
          <a href='mailto:daniela.alvesm@outlook.com.br'>daniela.alvesm@outlook.com.br</a>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-white font-bold text-lg font-lato">
          <p>Encontre-me:</p>
          <div className="flex gap-16">
            <a href="http://linkedin.com/in/daniela-alvesm" target="_blank">
              <FaLinkedin size={30} className="text-maincolor hover:brightness-110" />
            </a>
            <a href="https://wa.me/5521983055922" target="_blank">
              <FaWhatsapp size={30} className="text-maincolor hover:brightness-110" />
            </a>
            <a href="https://github.com/alvesxdani" target="_blank">
              <FiGithub size={30} className="text-maincolor hover:brightness-110" />
            </a>
          </div>

        </div>
        </div>
  )
}

export default Footer