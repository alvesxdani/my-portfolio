import styled from "styled-components";

export const ContainerNav = styled.div`
left: 0;
top: 0;
width: 100%;
height: 7rem;
display: flex;
flex-direction: row;
background-color: ${props => props.theme.colors.backgroundNav};
color: #000;
font: 1rem 'Montserrat',sans-serif;
align-items: center;
margin-bottom: 1rem;

  @media(max-width: 900px) {
    position: fixed;
    margin-right: 150px;
    transition: .5s ease-in;
    align-items: center;
    width: 60px;
    height: 100vh;
    flex-direction: column;
    padding: 1rem;
  }
}
`;

export const BrandTitle = styled.div`
flex-shrink: 0;
font: bold 2rem 'Nunito',sans-serif;
margin-left: 3rem;
color: ${props => props.theme.colors.secundary};
  @media(max-width: 900px) {
    font-size: 1.5rem;
    margin: 0 0 4rem 0;
    align-items: center;
    text-align: center;
  }
`;

export const LinksBox = styled.div`
display: flex;
justify-content: right;
margin-right: 2rem;
width: 100%;
background: #000;
  @media(max-width: 900px) {
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    margin: 0;
  }
`;

export const Link = styled.a`
display: flex;
align-items: center;
color: ${props => props.theme.colors.primary};
margin-right: 2rem;
transition: .8s ease-in;
  span {
    font: 14px 'Montserrat';
    font-weight: 600;
  }
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  &:hover {
    color: ${props => props.theme.colors.secundary}
  }

  @media(max-width: 900px) {
    margin: 0 0 4rem 0;
    text-align: center;

    svg {
      font-size: 2.5rem;
    }
    
    span {
      display: none;
    }
  }
`;

export const BoxToggle = styled.div`
display: flex;
align-items: center;
margin-right: 2rem;
@media(max-width: 900px) {
  width: 100%;
  justify-content: center;
}
`;