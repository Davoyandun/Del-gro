import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../../styles/TableCarrusel.module.css";
import AdminSideBar from "./AdminSideBar";
import FormCarrusel from "./FormCarrusel";
import {
  handlertElementEditOpen,
  handlerSubmitOthers,
  handlerSubmitEditOthers,
  handlerDelete,
} from "../../utils/Utils";

export default function TableCarrusel() {
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
    Context.getCarrusel();
  }, [handlerSubmitOthers,
    handlerSubmitEditOthers,handlerDelete]);

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
                <th>Titulo </th>
                <th>Imagen</th>

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
                      <img
                        src={img.image}
                        alt="Imagen no encontrada"
                        width="120"
                        height="40"
                      />
                    </td>

                    <td>
                      <Button
                        onClick={(event) =>
                          handlertElementEditOpen(
                            event,
                            img,
                            state,
                            setState,
                            handleShowEdit
                          )
                        }
                      >
                        Editar
                      </Button>
                      <Button    onClick={(event) =>
                        handlerDelete(
                          event,
                          img,
                          "carrusel",
                          Context.getCarrusel
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
      <FormCarrusel
        tittle="Agregar Nueva Imagen"
        show={show}
        handleClose={handleClose}
        state={state}
        route="carrusel"
        setState={setState}
        handlerSubmitOthers={handlerSubmitOthers}
        refresh={Context.getCarrusel}
      />
      {/* // Edit Form */}
      <FormCarrusel
        tittle={`Editar Imagen: ${state.name}`}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmitOthers={handlerSubmitEditOthers}
        route={`carrusel/${state.id}`}
        refresh={Context.getCarrusel}
      />
    </div>
  );
}
