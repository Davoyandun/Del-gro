import React, { useContext, useEffect, useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import AgroContext from "../../context/AgroContext";
import style from "../../styles/TableProducts.module.css";
import AdminSideBar from "./AdminSideBar";
import FormProducts from "./FormProducts";
import FormEditProducts from "./FormEditProducts";
import {
  clearState,
  verificationFormProducts,
  BaseURL,
} from "../../utils/Utils";

export default function TableProducts() {
  const Context = useContext(AgroContext);
  //modales
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [state, setState] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    presentation: " ",
    composition: "",
    price: "",
    test: " ",
    stock: true,
    ids_brand: [],
    ids_pest: [],
    ids_crop: [],
  });

  useEffect(() => {
    Context.getProducts();
  }, []);

  function handlerEdit(product) {
    setState({
      ...state,
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      presentation: product.presentation,
      composition: product.composition,
      price: product.price,
      test: product.test,
      stock: product.stock,
      ids_brand: product.brands.map((brand) => brand.id),
      ids_pest: product.pests.map((pest) => pest.id),
      ids_crop: product.crops.map((crop) => crop.id),
    });

    handleShowEdit();
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    let errors = verificationFormProducts(state);
    if (Object.entries(errors).length === 0) {
      await axios
        .post(`${BaseURL}products`, state)
        .then(() => {
          handleClose();
          Swal.fire({
            icon: "success",
            title: `Producto agregado correctamente`,
            text: `El producto ${state.name} se agrego a la base de datos`,
          });
          clearState(setState);
        })
        .catch((error) => {
          handleClose();
          Swal.fire({
            icon: "error",
            title: `Algo salio mal`,
            text: error,
          });
          clearState(setState);
        });
    } else {
      errors = Object.values(errors);
      Swal.fire({
        icon: "warning",
        title: "Espacios vacios en el formulario",
        text: errors.toString(),
      });
    }
  }

  async function handlerSubmitEdit(e) {
    e.preventDefault();
    let errors = verificationFormProducts(state);
    if (Object.entries(errors).length === 0) {
      await axios
        .put(`${BaseURL}products/${state.id}`, state)
        .then(() => {
          handleCloseEdit();
          Swal.fire({
            icon: "success",
            title: `Producto se modifico correctamente`,
            text: `El producto ${state.name} ha sido modificado`,
          });
          clearState(setState);
        })
        .catch((error) => {
          handleCloseEdit();
          Swal.fire({
            icon: "error",
            title: `Algo salio mal`,
            text: error,
          });
          clearState(setState);
        });
    } else {
      errors = Object.values(errors);
      Swal.fire({
        icon: "warning",
        title: "Espacios vacios en el formulario",
        text: errors.toString(),
      });
    }
  }

  async function handlerDelete(product, event) {
    event.preventDefault();
    Swal.fire({
      title: `Eliminar ${product.name}`,
      showCancelButton: true,
      showDenyButton: true,
      denyButtonText: `Conservar`,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${BaseURL}products/${product.id}`)
          .then(() => {
            Swal.fire("Eliminado!", "", "success");
          })
          .catch(() => {
            Swal.fire(
              "Algo salio mal, no se pudo eliminar el producto!",
              "",
              "warning"
            );
          });
      } else if (result.isDenied) {
        Swal.fire("El producto sigue disponible", "", "info");
      }
    });
  }

  console.log(Context.products);

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <AdminSideBar />
      </div>

      <div className={style.tableContainer}>
        <div className={style.buttonAdd}>
          <Button onClick={handleShow}> Agregar Producto</Button>
        </div>
        <Table bordered hover size="sm" className={style.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {Context.products ? (
            Context.products.map((product) => (
              <tbody>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <div>{product.stok}</div>
                    <div>
                      <Form.Check type="switch" id="custom-switch" />
                    </div>
                  </td>
                  <td>
                    <Button onClick={() => handlerEdit(product)}>
                      <MdModeEditOutline />
                    </Button>

                    <Button
                      color="danger text-dark bg-danger "
                      onClick={(event) => handlerDelete(product, event)}
                    >
                      <MdDelete />
                    </Button>
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
                <td>Cargando...</td>
                <td>Cargando...</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
      <FormProducts
        show={show}
        handleClose={handleClose}
        Context={Context}
        state={state}
        setState={setState}
        handlerSubmit={handlerSubmit}
      />

      <FormEditProducts
        product={state}
        show={showEdit}
        handleClose={handleCloseEdit}
        state={state}
        setState={setState}
        handlerSubmit={handlerSubmitEdit}
        Context={Context}
      />
    </div>
  );
}
