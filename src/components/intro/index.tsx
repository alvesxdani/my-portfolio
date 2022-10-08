import React from "react";
import { ContainerIntro, DescBox, ImgBox } from "./style";

const Intro: React.FC = () => {
  return (
    <section id="intro">
      <ContainerIntro>
        <DescBox>
          <h1>Oi! Meu nome é Daniela.</h1>
          <h2>Sou desenvolvedora Front End Jr.</h2>
          Example.
        </DescBox>

        <ImgBox>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8A3FFC"
            d="M68.3,-18.8C78,7.7,68.1,43.9,46.4,58.4C24.7,72.8,-8.8,65.5,-34.1,47.1C-59.4,28.7,-76.4,-0.9,-69.4,-23.7C-62.3,-46.5,-31.2,-62.5,-0.9,-62.2C29.3,-61.9,58.6,-45.2,68.3,-18.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </ImgBox>
      </ContainerIntro>
    </section>
  );
};

export default Intro;
