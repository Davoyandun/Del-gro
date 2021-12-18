import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../styles/Tables.module.css";

export default function TableCrops() {
    const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getCrops();
  }, []);


  return (
    <Container>
      <Table bordered hover size="sm" className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Cultivo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.crops ? (
          Context.crops.map((crop) => (
            <tbody>
              <tr>
                <td>{crop.id}</td>
                <td>{crop.name}</td>
  
               
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
