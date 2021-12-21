
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

export default function FormPosts() {

    const [state, setState] = useState({
        name: "",
        image: "",
        description: "",
      });
    
      async function handlerSubmit(e) {
        e.preventDefault();
        let errors = verificationFormOthers(state);
        if (Object.entries(errors).length === 0) {
          await axios.post(`${BaseURL}posts`, state);
          Swal.fire({
            icon: "success",
            title: `Posteo realizado`,
            text: `El post ${state.name} se agrego a la base de datos`,
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

      console.log(state)
    return (
        <Form onSubmit={(e) => handlerSubmit(e)}>
        <Container>
          <h3> Agrega un nuevo Post </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo de noticia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nueva Promoción"
              name="name"
              value={state.name}
              onChange={(e) => handlerOnChange(e, state, setState)}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Noticia </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="text"
              name="description"
              value={state.description}
              onChange={(e) => handlerOnChange(e, state, setState)}
            />
          </Form.Group>
  

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Foto de noticia</Form.Label>
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
