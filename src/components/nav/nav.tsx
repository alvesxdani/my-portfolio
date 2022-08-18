import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { BoxToggle, BrandTitle, ContainerNav, Link, LinksBox } from './style';

interface Props {
  toggleTheme(): void;
}

// Component
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const {colors, title} = useContext(ThemeContext);

  return (
    <nav>
      <ContainerNav>
        <BrandTitle>Daniela Moreira</BrandTitle>

        <LinksBox>
          <Link href="/">Home</Link>

          <Link href="#about">Sobre</Link>

          <Link href="#skills">Skills</Link>

          <Link href="#projects">Projetos</Link>

          <Link href="#contact">Contato</Link>
        </LinksBox>

        <BoxToggle>
          <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
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
    </nav>
  );
}

export default NavBar;