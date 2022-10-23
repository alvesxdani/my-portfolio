import { ContainerProjects, ProjectsTitle } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleSlide.css";
import Project1 from "./01project.png";
import Project2 from "./02project.png"
import Project3 from "./03project.png"
import Project4 from "./04project.png"
import Project5 from "./05project.png"
import Project6 from "./06project.png"
import AOS from 'aos';
import { useEffect } from "react";

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
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
            delay: 2500,
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
            <img src={Project1} alt="My project one" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project2} alt="My project two" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project3} alt="My project three" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project4} alt="My project four" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project5} alt="My project five" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Project6} alt="My project six" />
          </SwiperSlide>
        </Swiper>
      </ContainerProjects>
    </section>
  );
}

export default Projects;