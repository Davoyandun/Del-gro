import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";
import style from "../../styles/TableBrands.module.css";
import AdminSideBar from "./AdminSideBar";
import FormBrands from "./FormBrands";
import {
  handlertElementEditOpen,
  handlerSubmitOthers,
  handlerSubmitEditOthers,
  handlerDelete,
} from "../../utils/Utils";

export default function TableBrands() {
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
    Context.getBrands();
  }, [
  ]);





  return (
    <div className={style.container}>
      <div>
        <AdminSideBar />
      </div>
      <div className={style.tableContainer}>
        <div className={style.buttonAdd}>
          <Button onClick={() => handleShow()}>Agregar Marca</Button>
        </div>
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
                      <Button
                       onClick={(event) =>
                        handlertElementEditOpen(
                          event,
                          brand,
                          state,
                          setState, 
                          handleShowEdit
                        )
                      }>Editar</Button>

                      <Button    onClick={(event) =>
                        handlerDelete(
                          event,
                          brand,
                          "brands",
                         Context.getBrands
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
      <FormBrands
        tittle="Agregar Nueva Marca"
        show={show}
        handleClose={handleClose}
        state={state}
        route="brands"
        setState={setState}
        handlerSubmitOthers={handlerSubmitOthers}
        refresh={Context.getBrands}
      />
      {/* // Edit Form */}
      <FormBrands
        tittle={`Editar la Marca:  ${state.name}`}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmitOthers={handlerSubmitEditOthers}
        route={`brands/${state.id}`}
        refresh={Context.getBrands}
      />
    </div>
  );
}
