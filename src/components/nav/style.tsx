import styled from "styled-components";

export const ContainerNav = styled.div`
left: 0;
top: 0;
width: 100%;
height: 7rem;
display: flex;
flex-direction: row;
background-color: ${(props) => props.theme.colors.backgroundNav};
color: #000;
font: 1rem 'Montserrat',sans-serif;
align-items: center;
margin-bottom: 1rem;

// @media(max-width: 900px) {

// }
`;

export const BrandTitle = styled.div`
  flex-shrink: 0;
  font: bold 2rem "Nunito", sans-serif;
  margin-left: 3rem;
  color: ${(props) => props.theme.colors.secundary};
  @media(max-width: 900px) {
    flex-grow:2;
  }
`;

export const LinksBox = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 2rem;
  width: 100%;

  @media(max-width: 900px) {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    border-radius:  2rem 2rem 0 0;
    background: ${props => props.theme.colors.backgroundNav};
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 2rem;
  transition: 0.8s ease-in;
  span {
    font: 14px "Montserrat";
    font-weight: 600;
  }
  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  &:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  @media(max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

export const ButtonMinNav = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    background: ${(props) => props.theme.colors.backgroundNav};
    color: ${(props) => props.theme.colors.text};
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.third};

    svg {
      font-size: 2rem;
    }
  }
`;


export const BoxToggle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;
