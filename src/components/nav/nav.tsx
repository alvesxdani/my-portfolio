import styled from 'styled-components';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

// Style
const ContainerNav = styled.div`
display: flex;
background-color: ${props => props.theme.colors.backgroundNav};
color: #000;
font: 1rem 'Montserrat',sans-serif;
padding: 1rem;
align-items: center;
}
`;

const BrandTitle = styled.div`
font: bold 1.5rem 'Nunito',sans-serif;
color: ${props => props.theme.colors.primary};
`;

const LinksBox = styled.div`
display: flex;
justify-content: right;
width: 100%;
`;

const Link = styled.a`
color: ${props => props.theme.colors.links};
font: 14px 'Montserrat';
margin-right: 2rem;
transition: .8s ease-in;
  &:hover {
    color: ${props => props.theme.colors.primary}
  }
`;

const BoxToggle = styled.div`
display: flex;
align-items: center;
`;

interface Props {
  toggleTheme(): void;
}

// Component
const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  const {colors, title} = useContext(ThemeContext);

  return (
    <nav>
      <ContainerNav>
        <BrandTitle>Teste</BrandTitle>

        <LinksBox>
          <Link href="/">Home</Link>

          <Link href="#about">Sobre</Link>
        </LinksBox>

        <BoxToggle>
          <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={20}
          offColor={colors.primary}
          onColor={colors.secundary}
          
          />
        </BoxToggle>


      </ContainerNav>
    </nav>
  );
}

export default NavBar;