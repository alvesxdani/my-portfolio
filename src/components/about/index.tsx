import { AboutContent, BoxButton, ButtonResume, ContainerFlex, DescAbout, ImgMeBox, SocialMediaBox, TitleAbout } from "./style"
import MyPhoto from './02.jpg';
import MyResume from './resume.pdf';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import React, { useEffect } from 'react';
import AOS from 'aos';

const About: React.FC = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <section id="about">
      <AboutContent>
        <TitleAbout>Sobre mim</TitleAbout>
        <ContainerFlex>

          <ImgMeBox data-aos="fade-up">
            <img src={MyPhoto} alt="Meu retrato." />
          </ImgMeBox>

          <DescAbout data-aos="fade-down">
            Olá! Meu nome é Daniela, tenho 25 anos e moro no Rio de Janeiro. Sou formada em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Carioca. Sou apaixonada por tecnologia, desde sempre lidando com o mundo da informática. Com meus 14/15 anos, aprendi HTML e CSS. Aos 15 anos, desenvolvi a minha primeira página complexa, utilizando essas duas linguagens de marcação. Atualmente, estudo tecnologias para atuar na área de Desenvolvimento Front-End. Seja bem vindo(a) e fique a vontade para conhecer um pouco dos meus projetos! :)
            <SocialMediaBox>
              <a href="https://linkedin.com/in/daniela-alvesm">
                <BsLinkedin size={30} />
              </a>

              <a href="https://github.com/alvesxdani">
                <BsGithub size={30} style={{ marginLeft: '1rem' }} />
              </a>
            </SocialMediaBox>

            <BoxButton>
              <ButtonResume href={MyResume}>
                Download CV <BiDownload size={18} style={{ marginLeft: '1rem' }} />
              </ButtonResume>
            </BoxButton>
          </DescAbout>
        </ContainerFlex>
      </AboutContent>
    </section>
  );
}
export default About;