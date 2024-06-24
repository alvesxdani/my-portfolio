'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Button from '../ui/Button'
import AOS from 'aos'

const Sobre = () => {
  useEffect(() => {
    AOS.init({
      delay: -80,
      duration: 1000,
    })
  }, [])

  return (
    <section
      id="sobre"
      className="flex justify-center items-center align-middle w-100 h-auto p-5 relative bg-[#FDFBFB] sm:min-h-[90vh]"
    >
      <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
        <Image
          src="/Images/Sobre/foto.png"
          alt="Minha selfie"
          width={200}
          height={200}
          data-aos="fade-in"
        />

        <div className="flex flex-col justify-center items-center w-[90%] md:w-[50%] gap-6 ">
          <h2
            className="font-montserrat font-bold text-center text-maincolor"
            data-aos="fade-up"
          >
            Sobre
          </h2>
          <p className="text-justify" data-aos="fade-left">
            Olá, meu nome é Daniela, sou formada em Análise e Desenvolvimento de
            Sistemas pelo Centro Universitário Carioca e atualmente cursando
            Desenvolvedor Full Stack na EBAC. Sou uma profissional com perfil
            comunicativo, autodidata e proativo. Estou em transição de carreira
            e tenho experiência em React, TypeScript, NextJS, além de
            habilidades em integração de APIs, JSON, Redux, Tailwind CSS,
            Responsividade e SEO. Participei de um projeto voluntário como
            Desenvolvedora Front-End, construindo uma plataforma de cursos
            gratuitos para mulheres que desejam ingressar na área de UI/UX.
          </p>
          <a
            href="https://drive.google.com/file/d/1xB86KF4Vw8SFMan0Y6voEwHacyehqXqx/view?usp=drivesdk"
            target="_blank"
            data-aos="fade-in"
          >
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
