
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import {
  BaseURL,
  clearState,
  handlerOnChange,
  verificationFormOthers,
} from "../../utils/Utils";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormCarrusel() {

    const [state, setState] = useState({
        name: "",
        image: "",
        description: "",
      });
    
      async function handlerSubmit(e) {
        e.preventDefault();
        let errors = verificationFormOthers(state);
        if (Object.entries(errors).length === 0) {
          await axios.post(`${BaseURL}carrusel`, state);
          Swal.fire({
            icon: "success",
            title: `Imagen de carrusel agregada correctamente`,
            text: `La imagen ${state.name} se agrego a la base de datos`,
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
          <h3> Inserte imagen de carrusel </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nueva Promoción"
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
          <h5 >Recuerde que las imagenes deben guardarse en un formato 1200X400  </h5>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Imagen de carrusel</Form.Label>
            {!state.image ? (
              <output> X</output>
            ) : (
              <output>
                <img src={state.image} width="120" height="40" alt="Img No Found"></img>
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
    )
}
