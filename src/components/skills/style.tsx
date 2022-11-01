import styled from "styled-components";

export const SkillsContent = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
color: ${(props) => props.theme.colors.text}
`;

export const SkillsTitle = styled.div`
font: 3rem 'Nunito', sans-serif;
text-align: center;
font-weight: bold;
text-decoration: underline ${(props) => props.theme.colors.secundary} wavy 3px;
margin: 2rem 0 2rem 0;
width: 100%;
`;

export const ContainerFlexSkills = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
justify-content: center;
align-items:center;
`;

