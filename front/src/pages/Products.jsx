import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import CardProducts from "../components/CardProducts";
import SideBar from "../components/Sidebar";

export default function Products() {
  const Context = useContext(AgroContext);
 
  const [products, setProducts] = useState([]);


  useEffect(() => {
    Context.getProducts();


  }, []);

  return (
    <div>
      <div>
   <SideBar/>
      </div>
      
       <div>
      {Context.productsFilter ? (
        Context.productsFilter.map((product) => {
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
            );
          }
        })
      ) : (
        <h3>No Existen Produtos</h3>
      )}
    </div>

    </div>
   
  );
}
