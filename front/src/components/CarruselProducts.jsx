import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../styles/CarruselProducts.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarruselProducts() {
  const Context = useContext(AgroContext);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  useEffect(() => {
    Context.getProducts();
  }, [items]);
  return (
    <div className="container">
      <h2>Productos Descacados</h2>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) =>
            Context.products.map((product) => (
              <Item key={item}>
                <img src={product.image} alt="Image no Found" />
              </Item>
            ))
          )}
        </Carousel>
      </div>
    </div>
  );
}
