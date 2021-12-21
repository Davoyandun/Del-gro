import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../styles/Tables.module.css";

export default function TableCarrusel() {
    const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getCarrusel();
  }, []);

  
  return (
    <Container>
      <Table bordered hover size="sm" className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.carrusel ? (
          Context.carrusel.map((img) => (
            <tbody>
              <tr>
                <td>{img.id}</td>
                <td>{img.name}</td>
  
               
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