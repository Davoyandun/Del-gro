import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {
  BaseURL,
  clearState,
  handlerOnChange,
  verificationFormOthers,
} from "../../utils/Utils";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormCrops() {
  const [state, setState] = useState({
    name: "",
    image: "",
    description: "",
  });

  async function handlerSubmit(e) {
    e.preventDefault();
    let errors = verificationFormOthers(state);
    if (Object.entries(errors).length === 0) {
      await axios.post(`${BaseURL}crops`, state);
      Swal.fire({
        icon: "success",
        title: `Cultivo agregado correctamente`,
        text: `El cultivo ${state.name} se agrego a la base de datos`,
      });

      clearState(setState);
    } else {
      errors = Object.values(errors);
      Swal.fire({
        icon: "warning",
        title: "Espacios vacios en el formulario",
        text: errors.toString(),
      });
    }
  }



  return (
    <Form onSubmit={(e) => handlerSubmit(e)}>
      <Container>
        <h3> Inserte un Cultivo</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del Cultivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Papas"
            name="name"
            value={state.name}
            onChange={(e) => handlerOnChange(e, state, setState)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            type="text"
            name="description"
            value={state.description}
            onChange={(e) => handlerOnChange(e, state, setState)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagen del Cultivo</Form.Label>
          <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
          {!state.image ? (
            <output> X</output>
          ) : (
            <output>
              <img src={state.image} width="45" height="45" alt="Img No Found"></img>
            </output>
          )}
          <Form.Control
            type="file"
            accept="image/png, .jpeg, .jpg"
            name="image"
            onChange={(e) => handlerOnChange(e, state, setState)}

          />
        
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Container>
    </Form>
  );
}