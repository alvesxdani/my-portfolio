import React, { useRef } from "react";
import { Input, TextArea } from "../Inputs";
import emailjs from "@emailjs/browser";
import Button from "../Button";

const Contato = () => {
//   const form: React.MutableRefObject<HTMLFormElement> = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };
  return (
    <div className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-5">
      <h2 className="font-montserrat font-bold text-center text-maincolor">
        Contato
      </h2>

      <div className="flex flex-col-reverse md:flex-row w-[100%] gap-10">
        <form className="w-[100%] md:w-[50%] border">
          <Input type="text" id="name" label="Nome"/>
          <Input type="email" id="email" label="E-mail"/>
          <TextArea label="Mensagem"/>
          <Button size="md" type="submit">
            Enviar
          </Button>
        </form>
        <div className="w-[100%] md:w-[50%] border">
            Teste
        </div>
      </div>
    </div>
  );
};

export default Contato;
