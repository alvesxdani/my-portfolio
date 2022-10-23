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