import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button } from "react-bootstrap";
import style from "../../styles/TableCrops.module.css";
import AdminSideBar from "./AdminSideBar";
import FormCrops from "./FormCrops";
import {
  handlertElementEditOpen,
  handlerSubmitOthers,
  handlerSubmitEditOthers,
  handlerDelete,
} from "../../utils/Utils";

export default function TableCrops() {
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
    Context.getCrops();
  }, [ ]);

  return (
    <div className={style.container}>

      <div className={style.tableContainer}>
        <div className={style.buttonAdd}>
          <Button onClick={handleShow}>Agregar Cultivo</Button>
        </div>
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
                      <Button
                        onClick={(event) =>
                          handlertElementEditOpen(
                            event,
                            crop,
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
                          crop,
                          "crops",
                          Context.getCrops
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
      <FormCrops
        tittle="Agregar Nuevo Cultivo"
        show={show}
        handleClose={handleClose}
        state={state}
        route="crops"
        setState={setState}
        handlerSubmitOthers={handlerSubmitOthers}
        refresh ={Context.getCrops}
      />
      {/* // Edit Form */}
      <FormCrops
        tittle={`Editar el cultivo ${state.name}`}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmitOthers={handlerSubmitEditOthers}
        route={`crops/${state.id}`}
        refresh ={Context.getCrops}
        

      />
    </div>
  );
}
