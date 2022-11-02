import AOS from "aos";
import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { ContactTitle, ContainerContact, FormsContent } from "./style";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { colors } = useContext(ThemeContext);

  return (
    <section id="contact">
      <ContainerContact>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={colors.third}
            fill-opacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,80C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <ContactTitle>Contato</ContactTitle>

        <FormsContent data-aos="fade">
          <form
            action="https://getform.io/f/ab18abcd-c992-4a88-b588-19edc26f86f2"
            method="POST"
          >
            <label htmlFor="name">Nome: </label>
            <input type="text" name="name" required />

            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" required />

            <label htmlFor="message">Mensagem: </label>
            <textarea name="message" cols={30} rows={10} required />

            <button type="submit">Enviar</button>
          </form>
        </FormsContent>
      </ContainerContact>
    </section>
  );
};

export default Contact;
