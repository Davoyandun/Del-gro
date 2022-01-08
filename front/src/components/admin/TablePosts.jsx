import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button } from "react-bootstrap";
import style from "../../styles/TablePosts.module.css";
import AdminSideBar from "./AdminSideBar";
import FormPosts from "./FormPosts";

import {
  handlertElementEditOpen,
  handlerSubmitOthers,
  handlerSubmitEditOthers,
  handlerDelete,
} from "../../utils/Utils";

export default function TablePosts() {
  // estados
  const [state, setState] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  //Hooks

  const Context = useContext(AgroContext);

  useEffect(() => {
    Context.getPosts();
  }, []);

  return (
    <div className={style.container}>
      <div>
        <AdminSideBar />
      </div>
      <div className={style.tableContainer}>
        <div className={style.buttonAdd}>
          <Button onClick={handleShow}>Agregar Noticia</Button>
        </div>

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
                <tbody
                key ={post.id}>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.name}</td>

                    <td>
                    <Button
                          onClick={(event) =>
                            handlertElementEditOpen(
                              event,
                              post,
                              state,
                              setState,
                              handleShowEdit
                            )
                          }>Editar</Button>
                      <Button    onClick={(event) =>
                        handlerDelete(
                          event,
                          post,
                          "posts",
                          Context.getPosts
                        )
                      }>Eliminar</Button>
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
      </div>
      {/* // Add Form */}
      <FormPosts
        tittle="Agregar Nueva Noticia"
        show={show}
        handleClose={handleClose}
        state={state}
        route="posts"
        setState={setState}
        handlerSubmitOthers={handlerSubmitOthers}
        refresh={Context.getPosts}
      />
      {/* // Edit Form */}
      <FormPosts
        tittle={`Editar Noticia: ${state.name}`}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmitOthers={handlerSubmitEditOthers}
        route={`posts/${state.id}`}
        refresh={Context.getPosts}
      />
    </div>
  );
}
