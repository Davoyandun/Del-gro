import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import AgroContext from "../context/AgroContext";
import { clearState, verificationForm } from "../utils/Utils";
import { BaseURL } from "../utils/Utils";
import axios from "axios";
import Swal from "sweetalert2";

export default function FormProducts() {
  const Context = useContext(AgroContext);

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
    Context.getPests();
  }, []);

  // handles

  async function handlerOnChange(e) {
    if (e.target.name === "image") {
      let file = e.target.files;

      let formData = new FormData();
      formData.append("file", file[0]);
      formData.append("upload_preset", "DelAgro");
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/salvatorehnery/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const img = await res.json();

      setState({
        ...state,
        image: img.secure_url,
      });
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handlerBrand(e) {
    if (e.target.checked) {
      if (!state.ids_brand.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_brand: [...state.ids_brand, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_brand: [
          ...state.ids_brand.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }
  function handlerCrop(e) {
    if (e.target.checked) {
      if (!state.ids_crop.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_crop: [...state.ids_crop, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_crop: [
          ...state.ids_crop.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }
  function handlerPest(e) {
    if (e.target.checked) {
      if (!state.ids_pest.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_pest: [...state.ids_pest, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_pest: [
          ...state.ids_pest.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    let errors = verificationForm(state);
    if (Object.entries(errors).length === 0) {
      await axios.post(`${BaseURL}products`, state);
      Swal.fire({
        icon: "success",
        title: `Producto agregado correctamente`,
        text: `El producto ${state.name} se agrego a la base de datos`,
      });

      clearState(setState);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Espacios vacios en el formulario",
        text: `Compruebe la informacion e intentelo de nuevo`,
      });
    }
  }

  console.log(state);
  return (
    <Form onSubmit={(e) => handlerSubmit(e)}>
      <h3> Crear Nuevo Producto</h3>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Metralla"
            name="name"
            value={state.name}
            onChange={(e) => handlerOnChange(e)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Presentacion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 100, 300 y 500 g"
            name="presentation"
            value={state.presentation}
            onChange={(e) => handlerOnChange(e)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="num"
            placeholder="15.50"
            name="price"
            value={state.price}
            onChange={(e) => handlerOnChange(e)}
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
            onChange={(e) => handlerOnChange(e)}
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
          onChange={(e) => handlerOnChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ensayos Realizados</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="test"
          value={state.test}
          onChange={(e) => handlerOnChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Imagen del Producto</Form.Label>
        <Form.Control
          type="file"
          accept="image/png, .jpeg, .jpg"
          name="image"
          onChange={(e) => handlerOnChange(e)}
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
    </Form>
  );
}
