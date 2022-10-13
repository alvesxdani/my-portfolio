import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ContainerIntro, DescBox, ImgBox, TitleIntro, SubtitleIntro, ButtonAbout } from "./style";
import Photo from "./me.png";
import { TypeAnimation } from 'react-type-animation';
import { BsArrowRightShort } from "react-icons/bs";

const Intro: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <section id="intro">
      <ContainerIntro>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <DescBox>
          <TitleIntro>Oi! Meu nome é Daniela.</TitleIntro>
          <SubtitleIntro>

            <TypeAnimation
              sequence={[
                ' Desenvolvedora Front End Jr.', // Types 'One'
                1500, // Waits 1s
                ' ',
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1.2em', fontFamily: 'Consolas, sans-serif' }}
            />
          </SubtitleIntro>
          <ButtonAbout>Saiba mais <BsArrowRightShort size={16} style={{ marginLeft: '0.5rem' }} /> </ButtonAbout>
        </DescBox>

        <ImgBox>
          <svg viewBox="0 0 200 187" width="400px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            </mask>
            <g mask="url(#mask0)" fill={colors.secundary}>
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              <image href={Photo} width="200px" y="-20" />
            </g>
          </svg>
        </ImgBox>

      </ContainerIntro>
    </section>
  );
};

export default Intro;
