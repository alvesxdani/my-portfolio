import styled from "styled-components";

export const ContainerProjects = styled.div`
display:flex;
width: 100%;
height: 100vh;
background: ${(props) => props.theme.colors.secundary};
color: #fff;
flex-direction: column;
`;

export const ProjectsTitle = styled.div`
font: 3rem 'Nunito', sans-serif;
text-align: center;
font-weight: bold;
text-decoration: underline ${(props) => props.theme.colors.primary} wavy 3px;
margin-top: 2rem;
margin-bottom: 2rem;
`;

export const BoxSlide = styled.div`
display: flex;
flex-direction: column;
position: absolute;
bottom: 0;
background: rgba(0,0,0,0.8);
width: 100%;
height: 30%;
justify-content: center;
align-items: center;
font-size: 1.2rem;
`;

export const TitleSlide = styled.div`
width: 100%;
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
`;