import styled from "styled-components";

export const SkillsContent = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
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
width: 100%;
height: 100%;
justify-content: center;
`;

export const SkillsBox = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 7rem;
padding: 3rem;
transition: .80s ease-in;

i {
  flex-grow: 1;
  font-size: 10rem;
}

i:hover {
  color: ${(props) => props.theme.colors.secundary};
}

@media (max-width: 700px) {
  height: auto;

  i {
    font-size: 5rem;
  }
}
`;

