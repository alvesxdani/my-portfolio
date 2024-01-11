import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="flex justify-center items-center align-middle w-100 h-auto p-5 relative bg-[#FDFBFB] sm:min-h-[90vh]"
    >
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
        <Image src="/Images/Sobre/foto.png" alt="Minha selfie" width={200} height={200} />

        <div className="flex flex-col justify-center items-center w-[90%] md:w-[50%] gap-6 ">
          <h2 className="font-montserrat font-bold text-center text-maincolor">
            Sobre
          </h2>
          <p className="text-justify">
            Sou uma desenvolvedora front-end com mais de um ano de experiência,
            especializada em React, TypeScript e Next.js. Tenho conhecimentos em
            Figma e priorizo códigos reutilizáveis, sempre buscando aderir aos
            princípios de Clean code e Clean architecture. Estou comprometida em
            continuar aprimorando minhas habilidades e contribuir para projetos
            desafiadores.
          </p>
          <a href="https://www.canva.com/design/DAE_M3zLeaQ/scdLlFZRwZoNEXjHB23DuQ/view?utm_content=DAE_M3zLeaQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1" target='_blank'>
            <Button size="lg" type="button">
              <Image
                src="/Images/Sobre/download.png"
                alt=""
                width={18}
                height={24}
              />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sobre
