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
      className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-10"
    >
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 break-words justify-center items-center gap-[3rem] border border-maincolor">
        <FaHtml5 size={80} />
        <FaCss3Alt size={80} />
        <IoLogoJavascript size={80} />
        <BiLogoTypescript size={90} />
        <FaReact size={80} />
        <SiNextdotjs size={80} />
        <SiTailwindcss size={80} />
        <FaSass size={80} />
        <FaLess size={80} />
        <FaBootstrap size={80} />
        <BiLogoDjango size={80} />
        <FaGitAlt size={80} />
        <FaNpm size={80} />
        <FaGulp size={80} />
        <FaGrunt size={80} />
      </div>
    </section>
  );
};

export default Skills;
