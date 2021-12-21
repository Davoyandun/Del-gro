import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../../styles/Tables.module.css";

export default function TableBrands() {
    const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getBrands();
  }, []);


  return (
    <Container>
      <Table bordered hover size="sm" className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.brands ? (
          Context.brands.map((brand) => (
            <tbody>
              <tr>
                <td>{brand.id}</td>
                <td>{brand.name}</td>
  
               
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
           
            </tr>
          </tbody>
        )}
      </Table>
    </Container>
  );
}
