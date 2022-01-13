import React from "react";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import CarruselProducts from "../components/CarruselProducts";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Carrusel />
      </div>
      <div>
        <CarruselProducts />
      </div>
    </div>
  );
}
