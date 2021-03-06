import React from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";

import { handlerOnChange,  } from "../../utils/Utils";

export default function FormPests({
  tittle,
  show,
  handleClose,
  state,
  setState,
  route,
  handlerSubmitOthers,
  refresh
  
}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title> {tittle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => handlerSubmitOthers(event, state, setState, handleClose, route, refresh , 'Plaga',  )}
        >
          <Container>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de la Plaga</Form.Label>
              <Form.Control
                type="text"
                placeholder="Gusano"
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
                placeholder="Agregar texto aqui...."
                name="description"
                value={state.description}
                onChange={(e) => handlerOnChange(e, state, setState)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen del Cultivo</Form.Label>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
              {!state.image ? (
                <output> X</output>
              ) : (
                <output>
                  <img
                    src={state.image}
                    width="45"
                    height="45"
                    alt="Img No Found"
                  ></img>
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
      </Modal.Body>
    </Modal>
  );
}

