import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../../styles/TablePests.module.css";
import AdminSideBar from "./AdminSideBar";
import FormPests from './FormPests'

import {
  handlertElementEditOpen,
  handlerSubmitOthers,
  handlerSubmitEditOthers,
  handlerDelete,
} from "../../utils/Utils";

export default function TablePests() {
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
    Context.getPests();
  }, [handlerSubmitOthers,
    handlerSubmitEditOthers,handlerDelete]);

  return (
    <div className={style.container}>
      <div>
        <AdminSideBar />
      </div>
      <div className={style.tableContainer}>
        <div className={style.buttonAdd}>
          <Button onClick={handleShow}>Agregar Plaga</Button>
        </div>
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
                      <Button
                          onClick={(event) =>
                            handlertElementEditOpen(
                              event,
                              pest,
                              state,
                              setState,
                              handleShowEdit
                            )
                          }>Editar</Button>
                       <Button    onClick={(event) =>
                        handlerDelete(
                          event,
                          pest,
                          "pests",
                          Context.getPests
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
      <FormPests
        tittle="Agregar Nueva Plaga"
        show={show}
        handleClose={handleClose}
        state={state}
        route="pests"
        setState={setState}
        handlerSubmitOthers={handlerSubmitOthers}
        refresh={Context.getPests}
      />
      {/* // Edit Form */}
      <FormPests
        tittle={`Editar la plaga: ${state.name}`}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmitOthers={handlerSubmitEditOthers}
        route={`pests/${state.id}`}
        refresh={Context.getCrops}
      />
    </div>
  );
}
