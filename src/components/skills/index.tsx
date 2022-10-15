import { ContainerFlexSkills, SkillsBox, SkillsContent, SkillsTitle } from "./style";
import { useEffect } from "react";
import AOS from 'aos';

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  return (
    <section id="skills">
      <SkillsContent data-aos="fade">
        <SkillsTitle>Skills</SkillsTitle>
        <ContainerFlexSkills>

          <SkillsBox>
            <i className="devicon-html5-plain" data-aos="fade-up" />
            <i className="devicon-css3-plain" data-aos="fade-down" />
            <i className="devicon-javascript-plain" data-aos="fade-up" />
            <i className="devicon-react-original" data-aos="fade-down" />
          </SkillsBox>

          <SkillsBox>
            <i className="devicon-typescript-plain" data-aos="fade-down" />
            <i className="devicon-bootstrap-plain" data-aos="fade-up"></i>
            <i className="devicon-git-plain" data-aos="fade-down" />
            <i className="devicon-github-original" data-aos="fade-up" />
          </SkillsBox>

        </ContainerFlexSkills>
      </SkillsContent>
    </section>
  );
}

export default Skills;