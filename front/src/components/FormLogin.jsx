import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

export default function FormLogin({ show, handleClose }) {
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
        onSubmit={(values, { resetForm }) => {
          alert("Ingresaste papus");
        }}
      >
        <Form>
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
            </Modal.Body>
            <Modal.Footer>
              <button type="submit">Ingresar </button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Formik>
    </>
  );
}
