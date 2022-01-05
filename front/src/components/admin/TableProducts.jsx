import React, { useContext, useEffect, useState } from "react";
import AgroContext from "../../context/AgroContext";
import { Table, Container, Button, Form } from "react-bootstrap";

import style from "../../styles/TableProducts.module.css";
import AdminSideBar from "./AdminSideBar";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

export default function TableProducts() {
  const Context = useContext(AgroContext);
  const [modal, setModal] = useState({
    isVisible: true,
  });
  const [state, setState] = useState({
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

  function modalAction() {
    if (modal.isVisible) {
      return setModal({
        ...modal,
        isVisible: false,
      });
    } else {
      return setModal({
        ...modal,
        isVisible: true,
      });
    }
  }
  function handlerEdit(product) {
    setState({
      ...state,
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
    modalAction();
  }

  function handlerBrand(e) {
    if (e.target.checked) {
      if (!state.ids_brand.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_brand: [...state.ids_brand, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_brand: [
          ...state.ids_brand.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }
  function handlerCrop(e) {
    if (e.target.checked) {
      if (!state.ids_crop.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_crop: [...state.ids_crop, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_crop: [
          ...state.ids_crop.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }
  function handlerPest(e) {
    if (e.target.checked) {
      if (!state.ids_pest.includes(parseInt(e.target.value))) {
        setState({
          ...state,
          ids_pest: [...state.ids_pest, parseInt(e.target.value)],
        });
      }
    } else {
      setState({
        ...state,
        ids_pest: [
          ...state.ids_pest.filter((id) => id !== parseInt(e.target.value)),
        ],
      });
    }
  }

  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <AdminSideBar />
      </div>

      <div className={style.tableContainer}>
        
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

                    <Button>
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
    </div>
  );
}
