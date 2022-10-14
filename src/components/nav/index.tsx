import {
  BoxToggle,
  BrandTitle,
  ButtonMinNav,
  ContainerNav,
  Link,
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
        <BrandTitle>Daniela Moreira</BrandTitle>

        <MenuStyled>
          <Link href="/">
            <BiHome />
            <span>Home</span>
          </Link>

          <Link href="#about">
            <BsFillPersonFill />
            <span>Sobre</span>
          </Link>

          <Link href="#skills">
            <BiCodeAlt />
            <span>Skills</span>
          </Link>

          <Link href="#projects">
            <MdWorkOutline />
            <span>Projetos</span>
          </Link>

          <Link href="#contact">
            <BsFillChatLeftFill />
            <span>Contato</span>
          </Link>
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
          <Link href="/">
            <BiHome />
            <span>Home</span>
          </Link>

          <Link href="#about">
            <BsFillPersonFill />
            <span>Sobre</span>
          </Link>

          <Link href="#skills">
            <BiCodeAlt />
            <span>Skills</span>
          </Link>

          <Link href="#projects">
            <MdWorkOutline />
            <span>Projetos</span>
          </Link>

          <Link href="#contact">
            <BsFillChatLeftFill />
            <span>Contato</span>
          </Link>
        </MenuMobileStyled>)}
    </nav>
  );
};

export default NavBar;
