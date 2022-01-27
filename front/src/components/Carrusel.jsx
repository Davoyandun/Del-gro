import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import AgroContext from "../context/AgroContext";
import side1 from "../styles/images/side1.jpg";

export default function Carrusel() {
  // hooks

  const Context = useContext(AgroContext);
  useEffect(() => {
    Context.getCarrusel();
  }, []);

  return (
    <Carousel fade>
      {Context.carrusel ? (
        Context.carrusel.map((carrusel, i) => (
          <Carousel.Item interval={5000} key={i}>
            <img
              className="d-block w-100"
              src={carrusel.image}
              alt="First slide"
              width="1200px"
              height="400px"
            />
            <Carousel.Caption>
              <h3>{carrusel.name}</h3>
              <p>{carrusel.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      ) : (
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={side1}
            alt="First slide"
            width="1200px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Titulo</h3>
            <p>Descripcion</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  );
}
