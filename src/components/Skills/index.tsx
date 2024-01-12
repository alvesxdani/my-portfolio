import React from "react";

// Icons import
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { FaLess } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoDjango } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa6";
import { FaGulp } from "react-icons/fa6";
import { FaGrunt } from "react-icons/fa6";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-5"
    >
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 break-words justify-center items-center gap-[3rem]">
        <FaHtml5 size={80} className="transition-colors hover:text-maincolor" />
        <FaCss3Alt size={80} className="transition-colors hover:text-maincolor" />
        <IoLogoJavascript size={80} className="transition-colors hover:text-maincolor" />
        <BiLogoTypescript size={90} className="transition-colors hover:text-maincolor" />
        <FaReact size={80} className="transition-colors hover:text-maincolor" />
        <SiNextdotjs size={80} className="transition-colors hover:text-maincolor" />
        <SiTailwindcss size={80} className="transition-colors hover:text-maincolor" />
        <FaSass size={80} className="transition-colors hover:text-maincolor" />
        <FaLess size={80} className="transition-colors hover:text-maincolor" />
        <FaBootstrap size={80} className="transition-colors hover:text-maincolor" />
        <BiLogoDjango size={80} className="transition-colors hover:text-maincolor" />
        <FaGitAlt size={80} className="transition-colors hover:text-maincolor" />
        <FaNpm size={80} className="transition-colors hover:text-maincolor" />
        <FaGulp size={80} className="transition-colors hover:text-maincolor" />
        <FaGrunt size={80} className="transition-colors hover:text-maincolor" />
      </div>
    </section>
  );
};

export default Skills;
