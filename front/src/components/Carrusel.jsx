import React, { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import AgroContext from "../context/AgroContext";
import side1 from "../styles/images/side1.jpg";
import side2 from "../styles/images/side2.jpg";
import side3 from "../styles/images/side3.jpg";

export default function Carrusel() {
  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getCarrusel();
  }, []);

  console.log(Context.carrusel);

  return (
    <Carousel fade>
      {Context.carrusel.map((carrusel, i) => (
        <Carousel.Item interval={5000}>
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
      ))}
    </Carousel>
  );
}
