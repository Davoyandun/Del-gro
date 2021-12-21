import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../../styles/Tables.module.css";

export default function TablePests() {
    const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getPests();
  }, []);


  return (
    <Container>
      <Table bordered hover size="sm" className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Plagas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.pests ? (
          Context.pests.map((pest) => (
            <tbody>
              <tr>
                <td>{pest.id}</td>
                <td>{pest.name}</td>
  
               
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
