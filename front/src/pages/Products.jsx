import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import CardProducts from "../components/CardProducts";

export default function Products() {
  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getProducts();
  }, []);

  return (
    <div>
      {Context.products ? (
        Context.products.map((product) => {
          if (product.stock) {
            return (
             <CardProducts
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              id={product.id}
            />
          )

           
          }
        })
      ) : (
        <h3>No Existen Produtos</h3>
      )}
    </div>
  );
}
