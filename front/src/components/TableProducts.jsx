import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
export default function TableProducts() {
  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getProducts();
  }, []);

  console.log(Context.products);
  return (
    <Container>
      <Table  bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.products ? (
          Context.products.map((product) => (
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <div>{product.stok}</div>
                  <div>
                    <Form.Check type="switch" id="custom-switch" />
                  </div>
                </td>
                <td>
                  
                    <Button>Editar</Button>
                
                  
                    <Button>Eliminar</Button>
                
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>
              <td>0</td>
              <td>Cargando...</td>
              <td>Cargando...</td>
              <td>Cargando...</td>
              <td>Cargando...</td>
            </tr>
          </tbody>
        )}
      </Table>
    </Container>
  );
}
