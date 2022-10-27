import styled from "styled-components";

export const ContainerNav = styled.div`
position: fixed;
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
align-content: center;
margin-bottom: 1rem;
z-index: 9999;
`;

export const BrandTitle = styled.a`
  flex-shrink: 0;
  font: bold 2rem "Nunito", sans-serif;
  margin-left: 3rem;
  color: ${(props) => props.theme.colors.text};

  @media(max-width: 900px) {
    flex-grow:2;
  }

  @media(max-width: 350px) {
    visibility: hidden;
  }
`;

export const MenuStyled = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 2rem;
  width: 100%;
  transition: .80s ease-in;

  @media(max-width: 900px) {
    display: none;
  }
`;

export const MenuMobileStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  transition: .80s ease-in;
  z-index: 999;

  @media(max-width: 900px) {
    display: block;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius:  2rem 2rem 0 0;
    background: ${props => props.theme.colors.backgroundNav};
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 3rem;
  transition: .80s ease-in;
  span {
    font: 14px "Montserrat";
    font-weight: 600;
  }

  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
    transition: .80s ease-in;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  &:hover svg {
    color: ${(props) => props.theme.colors.text};
  }

  @media(max-width: 900px) {
    margin-bottom: 1rem;
    margin-right: 0;
    padding: 0.3rem;
    border-right: 3px solid ${(props) => props.theme.colors.secundary};

    &:hover {
      border-right: 3px solid ${(props) => props.theme.colors.primary};
    }
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
