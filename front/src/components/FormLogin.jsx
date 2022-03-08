import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { BaseURL } from "../utils/Utils";
import Swal from "sweetalert2";
import md5 from "md5";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export default function FormLogin({ show, handleClose }) {
  let cookie = new Cookies();
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.user) {
            errors.user = "Usuario no ingresado";
          }
          if (values.password.length < 8) {
            errors.password = "Contraseña demasiado corta";
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          await axios
            .post(`${BaseURL}login`, {
              user: values.user,
              password: md5(values.password),
            })
            .then((element) => {
              cookie.set("auth", element.data.access, { path: "/" });
              if (element.data.access) {
                Swal.fire({
                  icon: "success",
                  title: `Acceso concedido`,
                  text: `Bienvenido ${values.user}`,
                });
               
              } else {
                Swal.fire({
                  icon: "error",
                  title: `Acceso denegado`,
                  text: `Usuario o contraseña incorrecto/a}`,
                });
              }

              return element.data.access;
            })
            .then((element) => {
             if(element){
               navigate("/admin")
               console.log("hola redirect", element)
             }else{
              navigate("/home/products")
              console.log("hola redirect", element)

             }
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form id="fooId">
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title> Administrador</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="user">Administrador</label>
                  <Field name="user" type="text" />
                  <ErrorMessage name="user" />
                </div>
                <div>
                  <label htmlFor="password">Contraseña</label>
                  <Field name="password" type="password" />
                  <ErrorMessage name="password" />
                </div>
                <button type="submit" disabled={isSubmitting} form="fooId">
                  Ingresar
                </button>
              </Modal.Body>
            </Modal>
          </Form>
        )}
      </Formik>
    </>
  );
}
