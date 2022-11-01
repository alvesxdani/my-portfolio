import { ContactTitle, ContainerContact, FormsContent } from "./style";

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <ContainerContact>
                <ContactTitle>Contato</ContactTitle>

                <FormsContent>
                    <form action="https://getform.io/f/ab18abcd-c992-4a88-b588-19edc26f86f2" method="POST">
                        <label htmlFor="name">Nome: </label>
                        <input type="text" name="name" required/>

                        <label htmlFor="email">E-mail: </label>
                        <input type="email" name="email" required/>

                        <label htmlFor="message">Mensagem: </label>
                        <textarea name="message" cols={30} rows={10} required/>

                        <button type="submit">Enviar</button>
                    </form>
                </FormsContent>
            </ContainerContact>
        </section>
    );
}

export default Contact;