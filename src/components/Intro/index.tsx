"use client"
import React from 'react'
import Typed from 'typed.js';
import Button from '../Button';
import Image from 'next/image';


const Intro = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-End Developer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id='intro' className="flex flex-col justify-center items-center w-100 h-[90vh] gap-3 text-center p-4">
      <h1 className='font-montserrat font-bold'>Oi, meu nome é <span className="text-maincolor">Daniela</span>.</h1>
      <p className='uppercase text-lg font-lato text-bolder mb-3'>
      <span ref={el} />
      </p>
      <a href="#sobre">
      <Button type='button' size='md'>
        <Image src='./Images/Intro/seta.svg' alt="Uma pequena seta para baixo" width={8} height={15} />
        Saiba mais
      </Button>
      </a>
    </section>
  )
}

export default Intro
