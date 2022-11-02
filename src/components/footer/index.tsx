import AOS from "aos";
import { useEffect } from "react";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  BoxSocial,
  FooterContainer,
  GridContent,
  LinksFooter,
  OthersContacts,
  TitlesFooter,
} from "./style";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <footer>
      <FooterContainer>
        <GridContent>
          <LinksFooter>
            <TitlesFooter>Links:</TitlesFooter>
            <a href="/">Início</a>
            <a href="#Projetos">Projetos</a>
            <a href="#contact">Contato</a>
          </LinksFooter>

          <BoxSocial>
            <TitlesFooter>Encontre-me:</TitlesFooter>
            <a href="https://linkedin.com/in/daniela-alvesm">
              <BsLinkedin size={25} />
            </a>
            <a href="https://github.com/alvesxdani">
              <BsGithub size={25} style={{ marginLeft: "1rem" }} />
            </a>
          </BoxSocial>

          <OthersContacts>
            <TitlesFooter>Outros contatos:</TitlesFooter>
            <ul>
              <li>
              <HiOutlineMail size={15} style={{marginRight: '1.5rem'}}/>
            <a href="mailto:daniela.alvesm@outlook.com.br">
              daniela.alvesm@outlook.com.br
            </a>
              </li>

              <li>
                <BsFillTelephoneFill size={15} style={{marginRight: '1.5rem'}}/> Tel: +55 21 98305-5922
              </li>
            </ul>
          </OthersContacts>

        </GridContent>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
