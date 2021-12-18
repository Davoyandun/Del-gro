import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../styles/Tables.module.css";

export default function TablePosts() {
    const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getPosts();
  }, []);


  return (
    <Container>
      <Table bordered hover size="sm" className={style.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {Context.posts ? (
          Context.posts.map((post) => (
            <tbody>
              <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
  
               
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