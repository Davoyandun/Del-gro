import React from "react";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col, Container, Modal } from "react-bootstrap";
import AgroContext from "../../context/AgroContext";
import {
  clearState,
  verificationFormProducts,
  handlerOnChange,
  BaseURL,
} from "../../utils/Utils";



export default function FormEditProducts({ product, modal, modalAction }) {


    const Context = useContext(AgroContext);
    
  return (
    <Modal
      show={modal.isVisible}
      onHide={() => modalAction()}
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header >
        <Modal.Title>Editar {product.name}</Modal.Title>
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
                  value={product.name}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Presentacion</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: 100, 300 y 500 g"
                  name="presentation"
                  value={product.presentation}
                  onChange={(e) => handlerOnChange(e, state, setState)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="15.50"
                  name="price"
                  value={product.price}
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
                  value={product.composition}
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
                value={product.description}
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
                value={product.test}
                onChange={(e) => handlerOnChange(e, state, setState)}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen del Producto</Form.Label>
              {!product.image ? (
                <output> X</output>
              ) : (
                <output>
                  <img
                    src={product.image}
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
                        onChange={(e) => handlerCrop(e)}
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
                        onChange={(e) => handlerBrand(e)}
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
                        onChange={(e) => handlerPest(e)}
                      />
                    ))
                  ) : (
                    <div>No existen Plagas registradas</div>
                  )}
                </Col>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
