import React from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import FormContacts from "../components/FormContacts";

export default function Contacts() {
  return (
    <div>
      <h3>Contactos</h3>
      <h4>Para nosotros la estar siempre cerca es muy importante </h4>
      <div>
        <p>Para contactarse con la empresa, aqui puedes enviar un correo</p>
        <FormContacts />
      </div>
      <div>
        <p>También nos encuentras en las redes sociales</p>
        <a href="https://www.facebook.com/Delgro-318877788466318" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/+593992234467" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <p>
          O si prefieres, puedes escribirnos directamente a nuestro correo:
          delagro2016@gmail.com
        </p>
      </div>
    </div>
  );
}
