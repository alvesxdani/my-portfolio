import React from 'react'
import Button from '../Button'

type CardProps = {
  title: string
  subtitle: string
  text: string
  linkGithub: string
  linkDeploy: string
}
const Card = ({ title, subtitle, text, linkGithub, linkDeploy }: CardProps) => {
  return (
    <div className="bg-white rounded-[10px] shadow border border-neutral-100 flex-col inline-flex p-4 gap-4 justify-around w-[350px]">
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <h3 className="text-[#333] text-2xl font-bold font-montserrat">
          {title}
        </h3>
        <p className="text-neutral-400 text-md font-medium font-lato]">
          {subtitle}
        </p>
      </div>
      <div className="flex-col justify-between items-start align-middle inline-flex text-justify">
        <p>
          {text}
        </p>
      </div>
      <div className="justify-start items-start gap-2 inline-flex">
        <a href={linkGithub}>
        <Button size="md">GitHub</Button>
        </a>
        <a href={linkDeploy}>
        <Button size="md" mode="outline">
          Deploy
        </Button>
        </a>
      </div>
    </div>
  )
}

export default Card
