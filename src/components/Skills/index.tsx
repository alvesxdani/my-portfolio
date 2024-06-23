'use client'
import AOS from 'aos'
import { useEffect } from 'react'
import { BiLogoJquery, BiLogoTypescript } from 'react-icons/bi'
import {
  FaBootstrap,
  FaGitAlt,
  FaGrunt,
  FaGulp,
  FaHtml5,
  FaLess,
  FaNpm,
  FaReact,
  FaSass,
  FaVuejs,
} from 'react-icons/fa6'
import { IoLogoCss3, IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { SiBabel, SiCypress, SiJest, SiNextdotjs, SiRedux, SiTailwindcss, SiWebpack } from 'react-icons/si'
import CardIcon from '../ui/CardIcon'

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center w-100 min-h-[90vh] gap-[6rem] p-5"
    >
      <h2
        className="font-montserrat font-bold text-center text-maincolor"
        data-aos="fade-up"
      >
        Skills
      </h2>

      <CardIcon
        icons={[
          <FaHtml5 key={'HTML5'} />,
          <IoLogoCss3 key={'CSS3'} />,
          <IoLogoJavascript key={'Javascript'} />,
          <BiLogoTypescript key={'Typescript'} />,
          <FaReact key={'ReactJS'} />,
          <SiNextdotjs key={'NextJS'} />,
          <FaVuejs key={'VueJS'} />,
          <BiLogoJquery key={'jQuery'} />,
          <FaSass key={'SASS'} />,
          <FaLess key={'LESS'} />,
          <SiTailwindcss key={'TailwindCSS'} />,
          <FaBootstrap key={'Bootstrap'} />,
          <FaGitAlt key={'Git'} />,
          <FaNpm key={'NPM'} />,
          <FaGulp key={'GULP'} />,
          <FaGrunt key={'GRUNT'} />,
          <SiBabel key={'Babel'} />,
          <SiWebpack key={'Webpack'} />,
          <SiRedux key={'Redux'} />,
          <SiJest key={'Jest'} />,
          <SiCypress key={'Cypress'} />,
          <IoLogoFirebase key={'Firebase'} />,
        ]}
      />

      {/*
        <BiLogoDjango
          size={80}
          className="transition-colors hover:text-maincolor"
        />*/}
    </section>
  )
}

export default Skills
