'use client'
import React, { useEffect } from 'react'
import Card from '../ui/Card'
import { ProjetosLista } from './projetos-array'
import AOS from 'aos'

const Projetos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <section
      id="projetos"
      className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-4 bg-[#FDFBFB]"
    >
      <h2
        className="font-montserrat font-bold text-center text-maincolor"
        data-aos="fade-up"
      >
        Projetos
      </h2>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-[3rem]"
        data-aos="slide-up"
      >
        {ProjetosLista.map(
          ({ title, subtitle, text, github, deploy }, index) => {
            return (
              <Card
                key={index}
                title={title}
                subtitle={subtitle}
                text={text}
                linkGithub={github}
                linkDeploy={deploy}
              />
            )
          },
        )}
      </div>
    </section>
  )
}

export default Projetos
