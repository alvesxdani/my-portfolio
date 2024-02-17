'use client'
import React, { useEffect } from 'react'
import Typed from 'typed.js'
import Button from '../ui/Button'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Intro = () => {
  const el = React.useRef(null)

  useEffect(() => {
    AOS.init({
      delay: 1000,
      duration: 2000,
      useClassNames: true,
    })

    const typed = new Typed(el.current, {
      strings: ['Front-End Developer'],
      typeSpeed: 50,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section
      id="intro"
      className="flex flex-col justify-center items-center w-100 h-[90vh] gap-3 text-center p-4"
      data-aos="fade-up"
    >
      <h1 className="font-montserrat font-bold" data-aos="fade-down">
        Olá, meu nome é <span className="text-maincolor">Daniela</span>.
      </h1>
      <p className="uppercase text-lg font-lato text-bolder mb-3">
        <span ref={el} />
      </p>
      <a href="#sobre">
        <Button type="button" size="md">
          <Image
            src="./Images/Intro/seta.svg"
            alt="Uma pequena seta para baixo"
            width={8}
            height={15}
          />
          Saiba mais
        </Button>
      </a>
    </section>
  )
}

export default Intro
