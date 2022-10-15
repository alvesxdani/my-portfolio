import styled from "styled-components";


export const AboutContent = styled.div`
width: 100vw;
height: 100vh;
background: ${(props) => props.theme.colors.secundary};
color: #fff;
padding: 2rem;
box-sizing: border-box;

@media (max-width: 950px) {
  height: auto;
  padding: 3rem;
}
`;

export const TitleAbout = styled.div`
  font: 3rem 'Nunito', sans-serif;
  text-align: center;
  font-weight: bold;
  text-decoration: underline ${(props) => props.theme.colors.primary} wavy 3px;
  margin-top: 2rem;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 10%);
  align-items: center;
  
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const ImgMeBox = styled.div`
width: 50%;
text-align: center;

@media (max-width: 950px) {
  width: 100%;
  margin-top: 5rem;

  img {
    width: 30%;
  }
}

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
box-sizing: content-box;

@media (max-width: 950px) {
  width: 100%;
  font-size: 1.5rem;
}
`;

export const SocialMediaBox = styled.div`
  text-align: center;
  padding: 2rem;

  a {
    color: ${(props) => props.theme.colors.third};
    transition: .80s ease-in-out;
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary};
    filter brightness(120%);
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
border-radius: 5px;
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