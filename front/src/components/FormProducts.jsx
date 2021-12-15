import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import AgroContext from "../context/AgroContext";

export default function FormProducts() {

  const Context = useContext(AgroContext)

  const [state, setState] = useState({
    name: "",
    description: "",
    image: "",
    presentation: " ",
    composition: "",
    price: "",
    test: " ",
    stock: true,
    ids_brand: [],
    ids_pest: [],
    ids_crop: [],
  });

  useEffect(() => {
    Context.getCrops();
    Context.getBrands();
    Context.getPests()

  }, []);

  console.log(Context.crops)

  function onChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Form>
      <h3> Crear Nuevo Producto</h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Metralla"
            name="name"
            value={state.name}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Presentacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 100, 300 y 500 g"
            name="presentation"
            value={state.presentation}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="num"
            placeholder="15.50"
            name="price"
            value={state.price}
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
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion del Producto</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={state.description}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ensayos Realizados</Form.Label>
        <Form.Control 
        as="textarea" 
        rows={3} 
        name="test"
        value={state.test} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagen del Producto</Form.Label>
        <Form.Control type="file" 
        name="image"
        value={state.image} />
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
