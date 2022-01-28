import React from "react";
import { Form } from "react-bootstrap";

export default function Contacts() {
  return (
    <div>
      <h3>Contactos</h3>
      <p>Para nosotros es importante tu opinión es importante. </p>

      <Form>
          <h4>Envie un E-mail</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Ingrese su correo al cual le podemos contactar</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}
