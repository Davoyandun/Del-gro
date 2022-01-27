import React from "react";
import NavBar from "../components/NavBar";
import Carrusel from "../components/Carrusel";
import CarruselProducts from "../components/CarruselProducts";
import GaleryBrands from "../components/GaleryBrands";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Carrusel />
      </div>
      <div>
        <CarruselProducts />

        <GaleryBrands />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
