import { ContainerFlexSkills, SkillsContent, SkillsTitle } from "./style";
import { useEffect } from "react";
import AOS from 'aos';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  return (
    <section id="skills">
      <SkillsContent data-aos="fade">
        <SkillsTitle>Skills</SkillsTitle>
        <ContainerFlexSkills>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            data-aos="fade-up"
          >
            <SwiperSlide>
              <i className="devicon-html5-plain" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-css3-plain" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-javascript-plain" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-react-original" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-typescript-plain" />
            </SwiperSlide>

            <SwiperSlide>
            <i className="devicon-sass-original" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-bootstrap-plain" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-git-plain" />
            </SwiperSlide>

            <SwiperSlide>
              <i className="devicon-github-original" />
            </SwiperSlide>

            <SwiperSlide>
            <i className="devicon-npm-original-wordmark"/>
            </SwiperSlide>

            <SwiperSlide>
            <i className="devicon-django-plain"/>
            </SwiperSlide>
          </Swiper>

        </ContainerFlexSkills>
      </SkillsContent>
    </section>
  );
}

export default Skills;