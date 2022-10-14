import {
  BoxToggle,
  BrandTitle,
  ButtonMinNav,
  ContainerNav,
  StyledLink,
  MenuMobileStyled,
  MenuStyled
} from "./style";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext, useState } from "react";
import { BiHome, BiCodeAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { BsFillPersonFill, BsFillChatLeftFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import React from 'react';

interface Props {
  toggleTheme(): void;
}

// Component
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  const [extendedNav, setExtendedNav] = useState(false);


  const toggleMenu = () => {
    setExtendedNav(!extendedNav);
  }

  return (
    <nav>
      <ContainerNav>
        <BrandTitle href="/">Daniela Moreira</BrandTitle>

        <MenuStyled>
          <StyledLink href="/">
            <BiHome />
            <span>Home</span>
          </StyledLink>

          <StyledLink href="#about">
            <BsFillPersonFill />
            <span>Sobre</span>
          </StyledLink>

          <StyledLink href="#skills">
            <BiCodeAlt />
            <span>Skills</span>
          </StyledLink>

          <StyledLink href="#projects">
            <MdWorkOutline />
            <span>Projetos</span>
          </StyledLink>

          <StyledLink href="#contact">
            <BsFillChatLeftFill />
            <span>Contato</span>
          </StyledLink>
        </MenuStyled>

        <ButtonMinNav onClick={toggleMenu}>
          {extendedNav ? <IoMdClose /> : <AiOutlineMenu />}
        </ButtonMinNav>

        <BoxToggle>
          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={40}
            handleDiameter={25}
            offColor={colors.secundary}
            onColor="#eee"
            onHandleColor={colors.secundary}
            offHandleColor="#fff"
          />
        </BoxToggle>
      </ContainerNav>

      {extendedNav &&
        (<MenuMobileStyled>
          <StyledLink href="/">
            <BiHome />
            <span>Home</span>
          </StyledLink>

          <StyledLink href="#about">
            <BsFillPersonFill />
            <span>Sobre</span>
          </StyledLink>

          <StyledLink href="#skills">
            <BiCodeAlt />
            <span>Skills</span>
          </StyledLink>

          <StyledLink href="#projects">
            <MdWorkOutline />
            <span>Projetos</span>
          </StyledLink>

          <StyledLink href="#contact">
            <BsFillChatLeftFill />
            <span>Contato</span>
          </StyledLink>
        </MenuMobileStyled>)}
    </nav>
  );
};

export default NavBar;
