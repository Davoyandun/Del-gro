import React, { useEffect } from "react";
import { Button, Form, Row, Col, Container, Modal } from "react-bootstrap";

import {
  handlerOnChange,
  handlerBrand,
  handlerCrop,
  handlerPest,
} from "../../utils/Utils";

export default function FormProducts({
  show,
  handleClose,
  Context,
  state,
  setState,
  handlerSubmit,
}) {
  useEffect(() => {
    Context.getCrops();
    Context.getBrands();
    Context.getPests();
  }, []);

  // handles

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title> Agregar Nuevo Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handlerSubmit(e)}>
          <Container>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Metralla"
                  name="name"
                  value={state.name}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Presentacion</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: 100, 300 y 500 g"
                  name="presentation"
                  value={state.presentation}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="15.50"
                  name="price"
                  value={state.price}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>C. Activo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="clorantraniliprol"
                  name="composition"
                  value={state.composition}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion del Producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={state.description}
                onChange={(e) => handlerOnChange(e, state, setState)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ensayos Realizados</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="test"
                value={state.test}
                onChange={(e) => handlerOnChange(e, state, setState)}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen del Producto</Form.Label>
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
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Cultivos
                </Form.Label>
                <Col sm={10}>
                  {Context.crops ? (
                    Context.crops.map((crop) => (
                      <Form.Check
                        type="checkbox"
                        label={crop.name}
                        name={crop.name}
                        key={crop.id}
                        value={crop.id}
                        onChange={(e) => handlerCrop(e, state, setState)}
                      />
                    ))
                  ) : (
                    <div>No existen cultivos registrados</div>
                  )}
                </Col>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Marca
                </Form.Label>
                <Col sm={10}>
                  {Context.brands ? (
                    Context.brands.map((brand) => (
                      <Form.Check
                        type="checkbox"
                        label={brand.name}
                        name={brand.name}
                        key={brand.id}
                        value={brand.id}
                        onChange={(e) => handlerBrand(e, state, setState)}
                      />
                    ))
                  ) : (
                    <div>No existen marcas registradas</div>
                  )}
                </Col>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Plagas
                </Form.Label>
                <Col sm={10}>
                  {Context.pests ? (
                    Context.pests.map((pest) => (
                      <Form.Check
                        type="checkbox"
                        label={pest.name}
                        name={pest.name}
                        key={pest.id}
                        value={pest.id}
                        onChange={(e) => handlerPest(e, state, setState)}
                      />
                    ))
                  ) : (
                    <div>No existen Plagas registradas</div>
                  )}
                </Col>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Agregar
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
