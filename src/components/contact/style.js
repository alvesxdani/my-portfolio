import styled from "styled-components";

export const ContainerContact = styled.div`
position: relative;
display: flex;
width: 100%;
height: 100vh;
align-items: center;
flex-direction: column;
svg {
    filter: brightness(95%);
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
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
    z-index: 1;
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
    border: 1px solid #ccc;

}

input:focus, textarea:focus {
    outline: 3px solid ${(props) => props.theme.colors.primary};
}

button {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 0.3rem;
    font-size: 1.3rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.secundary};
    color: #fff;
    border: none;
    transition: .80s ease-in;
    align-itself: center;
}

button:hover {
    filter: brightness(130%);
}
`;