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
}
`;

export const BrandTitle = styled.div`
flex-shrink: 0;
font: bold 2rem 'Nunito',sans-serif;
margin-left: 2rem;
color: ${props => props.theme.colors.secundary};
`;

export const LinksBox = styled.div`
display: flex;
justify-content: right;
margin-right: 2rem;
width: 100%;
`;

export const Link = styled.a`
color: ${props => props.theme.colors.primary};
font: 14px 'Montserrat';
margin-right: 2rem;
transition: .8s ease-in;
font-weight: 600;
  &:hover {
    color: ${props => props.theme.colors.secundary}
  }
`;

export const BoxToggle = styled.div`
display: flex;
align-items: center;
margin-right: 2rem;
`;