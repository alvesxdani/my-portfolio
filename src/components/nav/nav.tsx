import styled from 'styled-components';

// Style
const Container = styled.div`
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
background: #000;
`;

const Link = styled.a`
color: ${props => props.theme.colors.links};
`;

// Component
const NavBar: React.FC = () => {
  return (
    <nav>
      <Container>
        <BrandTitle>Teste</BrandTitle>

        <LinksBox>
          <Link href="/">Home</Link>
        </LinksBox>
      </Container>
    </nav>
  );
}

export default NavBar;