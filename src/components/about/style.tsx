import styled from "styled-components";

export const AboutContent = styled.div`
width: 100%;
height: 100vh;
background: ${(props) => props.theme.colors.secundary};
color: #fff;
padding: 2rem;
`;

export const TitleAbout = styled.div`
  font: 3rem 'Nunito', sans-serif;
  text-align: center;
  font-weight: bold;
  text-decoration: underline ${(props) => props.theme.colors.primary} wavy 3px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 10%);
  align-items: center;
`;

export const ImgMeBox = styled.div`
width: 50%;
text-align: center;

img {
  width: 50%;
  border-radius: 3rem;
}
`;

export const DescAbout = styled.div`
width: 50%;
texta-align: justify;
font: 1.8rem 'Montserrat', sans-serif;
line-height: 3rem;
padding: 2.5rem;
`;

export const SocialMediaBox = styled.div`
  text-align: center;
  padding: 2rem;

  a {
    color: ${(props) => props.theme.colors.third};
  }
`;
export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonResume = styled.a`
display: flex;
align-items:center;
align-content: center;
background: #fff;
padding: 1.5rem;
border-radius: 4px;
font-size: 1.5rem;
font-weight: bold;
border: 1px solid #aaa;
color: ${(props) => props.theme.colors.primary};
cursor: pointer;
transition: .80s ease-in-out;

&:hover {
  color: ${(props) => props.theme.colors.secundary}
}
`;