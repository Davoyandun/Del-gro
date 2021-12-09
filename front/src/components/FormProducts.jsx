import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function FormProducts() {
  return (
    <Form>
      <h3> Crear Nuevo Producto</h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ej: Metralla" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Presentacion</Form.Label>
          <Form.Control type="text" placeholder="Ej: 100, 300 y 500 g" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Precio</Form.Label>
          <Form.Control type="num" placeholder="15.50" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>C. Activo</Form.Label>
          <Form.Control type="text" placeholder="clorantraniliprol" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion del Producto</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ensayos Realizados</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Cultivos
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Marca
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Plagas
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="checkbox"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="checkbox"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
