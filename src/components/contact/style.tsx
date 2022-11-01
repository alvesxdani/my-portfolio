import styled from "styled-components";

export const ContainerContact = styled.div`
display: flex;
width: 100%;
height: 100vh;
align-items: center;
flex-direction: column;
`;

export const ContactTitle = styled.div`
font: 3rem 'Nunito', sans-serif;
text-align: center;
font-weight: bold;
text-decoration: underline ${(props) => props.theme.colors.secundary} wavy 3px;
margin: 2rem 0 2rem 0;
width: 100%;
`;

export const FormsContent = styled.div`
display: flex;
align-items: center;
width: 70%;
height: 100%;
padding: 1rem;

form {
    display: flex;
    width: 100%;
    flex-direction: column;
}

label {
    font-size: 1.5rem;
    margin: 0.5rem;
}

input, textarea {
    margin-bottom: 3rem;
    padding: 0.5rem;
    font-size: 2rem;
    border-radius: 0.3rem;
    border: 1px solid #eee;
}

input:focus, textarea:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary};
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.3rem;
    font-size: 1.3rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.secundary};
    color: #fff;
}
`;