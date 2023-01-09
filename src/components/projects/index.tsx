import {
  BoxSlide,
  ContainerProjects,
  IconsBox,
  ProjectsTitle,
  TitleSlide,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Project1 from "./01project.png";
import Project2 from "./02project.png";
import Project3 from "./03project.png";
import Project4 from "./04project.png";
import Project5 from "./05project.png";
import Project6 from "./06project.png";
import Project7 from "./07project.png";
import Project8 from "./08project.png";
import Project9 from "./09project.png";
import AOS from "aos";
import { useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects">
      <ContainerProjects>
        <ProjectsTitle data-aos="fade">Projetos</ProjectsTitle>

        <Swiper
          data-aos="fade-up"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide>
            <img src={Project9} alt="My project seven" />
            <BoxSlide>
              <TitleSlide>Landing Page: Le Scone</TitleSlide>
              Projeto feito com HTML, React e SASS.
              <IconsBox>
                <a href="https://github.com/alvesxdani/le-scone">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/le-scone/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project8} alt="My project seven" />
            <BoxSlide>
              <TitleSlide>Formulário: React e TypeScript</TitleSlide>
              Projeto feito com React, TypeScript, React Hook Forms e Yup.
              <IconsBox>
                <a href="https://github.com/alvesxdani/tela-forms">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/tela-forms/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project7} alt="My project seven" />
            <BoxSlide>
              <TitleSlide>Calculadora: ReactJS</TitleSlide>
              Projeto feito com ReactJS.
              <IconsBox>
                <a href="https://github.com/alvesxdani/calculator">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/calculator/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project1} alt="My project one" />
            <BoxSlide>
              <TitleSlide>Product View: ReactJS</TitleSlide>
              Projeto feito com ReactJS.
              <IconsBox>
                <a href="https://github.com/alvesxdani/product-view">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/product-view/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project2} alt="My project two" />

            <BoxSlide>
              <TitleSlide>To Do List: ReactJS</TitleSlide>
              Projeto feito com ReactJS.
              <IconsBox>
                <a href="https://github.com/alvesxdani/todolist">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani-todolist.netlify.app/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project3} alt="My project three" />

            <BoxSlide>
              <TitleSlide>Pokedex: PokeAPI</TitleSlide>
              Projeto feito com HTML, CSS, JS com consumo de API.
              <IconsBox>
                <a href="https://github.com/alvesxdani/pokedex">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/pokedex/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project4} alt="My project four" />
            <BoxSlide>
              <TitleSlide>Landing Page: JS</TitleSlide>
              Projeto feito com HTML, CSS e JS puro.
              <IconsBox>
                <a href="https://github.com/alvesxdani/exercDOM">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/exercDOM/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project5} alt="My project five" />
            <BoxSlide>
              <TitleSlide>Landing Page: Bootstrap</TitleSlide>
              Projeto feito com HTML, CSS, utilizando o framework Bootstrap.
              <IconsBox>
                <a href="https://github.com/alvesxdani/landingPage">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://alvesxdani.github.io/landingPage/">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project6} alt="My project six" />
            <BoxSlide>
              <TitleSlide>Formulário de votação: Python (Django)</TitleSlide>
              Projeto feito com Python, usufruindo do framework Django.
              <IconsBox>
                <a href="https://github.com/alvesxdani/vote-forms">
                  <AiFillGithub size={20} style={{ marginRight: "1rem" }} />
                </a>
                <a href="https://vote-forms.herokuapp.com">
                  <BiLinkExternal size={20} />
                </a>
              </IconsBox>
            </BoxSlide>
          </SwiperSlide>
        </Swiper>
      </ContainerProjects>
    </section>
  );
};

export default Projects;
