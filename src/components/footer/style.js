import styled from "styled-components";

export const FooterContainer = styled.div`
position: relative;
width: 100%;
height: 30vh;
background: ${(props) => props.theme.colors.third};
padding: 2rem;
filter: brightness(95%);
display: flex;
flex-direction: column;
align-items: end;
justify-content: center;
`;

export const GridContent = styled.div`
width: 70%;
display: grid;
grid-template-columns: repeat(3, 2fr);
gap: 2rem;
`;

export const TitlesFooter = styled.div`
width: 100%;
font: bold 1.5rem 'Nunito', sans-serif;
margin-bottom: 1.5rem;
letter-spacing: 0.2rem;

&:first-letter {
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
}
`;

export const BoxSocial = styled.div`
a {
  color: ${(props) => props.theme.colors.primary};
  transition: .80s ease-in;
}

a:hover {
  filter: brightness(130%);
}
`;

export const LinksFooter = styled.div`
a {
  display: block;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secundary};
  margin-bottom: 0.5rem;
}
`;

export const OthersContacts = styled.div`
a {
  color: ${(props) => props.theme.colors.secundary};
  font-size: 1.3rem;
}

ul li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
`;