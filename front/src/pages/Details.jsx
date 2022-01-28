import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../utils/Utils";
import { useParams } from "react-router-dom";

export default function Details() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({
    brands: [],
    composition: "",
    crops: [],
    description: "",
    id: 0,
    image: "",
    name: "",
    pests: [],
    presentation: "",
    price: 23,
    stock: false,
    test: "",
  });
  useEffect(() => {
    let getByID = async () => {
      let result = await axios.get(`${BaseURL}products/${idProduct}`);
      setProduct({
        ...product,
        brands: result.data[0].brands,
        composition: result.data[0].composition,
        crops: result.data[0].crops,
        description: result.data[0].description,
        id: result.data[0].id,
        image: result.data[0].image,
        name: result.data[0].name,
        pests: result.data[0].pests,
        presentation: result.data[0].presentation,
        price: result.data[0].price,
        stock: result.data[0].stock,
        test: result.data[0].test,
      });
    };
    getByID();
  }, []);

  return (
    <div>
      <img src={product.image} alt="Imagen no disponible" />
      <p>{product.price}</p>
      <h3>Caracteristicas</h3>
      <p>Nombre: {product.name}</p>
      <p>Presentacion: {product.presentation}</p>
      <p> Elemento Activo: {product.composition}</p>
      <p>
        Marca/s:{" "}
        {product.brands ? (
          product.brands.map((brand) => (
            <span key={brand.id}>{`${brand.name} `}</span>
          ))
        ) : (
          <span>Productos no disponibles</span>
        )}
      </p>
      <h3>Se usa en los siguientes cultivos: </h3>
      {product.crops ? (
        product.crops.map((crop) => <span key={crop.id}>{`${crop.name} `}</span >)
      ) : (
        <p>Productos no disponibles</p>
      )}
      <h3>Se usa comunmente para combatir: </h3>
      {product.crops ? (
        product.pests.map((pest) => <span key={pest.id}>{`${pest.name} `} </span>)
      ) : (
        <p>Plagas no disponibles</p>
      )}
      <h3>Descripción: </h3>
      <p>{product.description}</p>
      <h3>Ensayos Aplicados: </h3>
      {product.test ? (
        <div>{product.test}</div>
      ) : (
        <div>No pudimos cargar los ensayos, intentalo mas tarde</div>
      )}
    </div>
  );
}
