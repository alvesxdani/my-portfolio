import React from 'react'
import Card from '../Card'
import { ProjetosLista } from './projetos-array'

const Projetos = () => {
  return (
    <section id='projetos' className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-4 bg-[#FDFBFB]">
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Projetos
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-[3rem]'>
        {ProjetosLista.map(({title, subtitle, text, github, deploy}, index) => {
          return (
            <Card key={index} title={title} subtitle={subtitle} text={text} linkGithub={github} linkDeploy={deploy} />
          )
        })}
      </div>
    </section>
  )
}

export default Projetos
