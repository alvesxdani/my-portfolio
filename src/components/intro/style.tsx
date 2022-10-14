import styled from "styled-components";

export const ContainerIntro = styled.div`
display: flex;
width: 100%;
height: 100vh;
flex-direction: row;
justify-content: center;
align-content: center;

.circles{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -999;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  animation: animate 25s linear infinite;
  bottom: -150px;
  background: ${(props) => props.theme.colors.text};
  filter: opacity(20%);
}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }

}

`;

export const DescBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;
padding: 1rem;
`;

export const TitleIntro = styled.h1`
font-size: 4rem;
color: ${(props) => props.theme.colors.primary};
margin: 0.5rem;
`;

export const SubtitleIntro = styled.h2`
font-size: 2rem;
font-family: 'Consolas', sans-serif;
color: ${(props) => props.theme.colors.secundary};
margin-bottom: 2rem;
`;

export const ButtonAbout = styled.a`
  display: flex;
  align-content: center;
  align-items:center;
  padding: 1rem;
  font-size: 1.3rem;
  font-family: 'Montserrat',sans-serif;
  font-weight: 600;
  background: ${(props) => props.theme.colors.secundary};
  color: #fff;
  border: 1px solid ${(props) => props.theme.colors.third};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: .80s ease-out;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    filter brightness(110%);
  }
`;

export const ImgBox = styled.div`
display: flex;
justify-content: center;
width: 50%;

@media (max-width: 650px) {
  display: none;
}

svg {
  width:50%;
}
`;