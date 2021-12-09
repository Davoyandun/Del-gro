import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormCrops() {
  return (
    <div>
      <Form>
          <h3> Inserte un Cultivo</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del Cultivo</Form.Label>
          <Form.Control type="text" placeholder="Ej: Papas" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagen del Cultivo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
