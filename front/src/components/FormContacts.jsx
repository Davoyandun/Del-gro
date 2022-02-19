import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import Swal from "sweetalert2";
export default function FormContacts() {
  init("user_fpiFmqQZ8iXcpPQf3X756");

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        name: "",
        lastName: "",
        text: "",
      }}
      validate={(values) => {
        let errors = {};
        //validacion telefono
        if (!values.phone) {
          errors.phone = "Se necesita un correo";
        }
        //validacion correo
        if (!values.email) {
          errors.email = "Se necesita un correo";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Correo invalidos";
        }
        // validacion nombre
        if (!values.name) {
          errors.name = "Se necesita un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name =
            "El nombre no puede tener simbolos especiales ni numeros";
        }
        // validacion texto
        if (!values.text) {
          errors.text = "El mensaje es requerido";
        } else if (values.text.length < 25) {
          errors.text = "El texto no puede ser tan corto";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        emailjs
          .send(
            "service_16izuq9",
            "template_sivors4",
            values,
            "user_fpiFmqQZ8iXcpPQf3X756"
          )
          .then(
            Swal.fire({
              icon: "success",
              title: `Correo enviado`,
              text: `Estimado ${values.name} su correo se envio correctamente`,
              timer: 4000,
            }),
            resetForm()
          )
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: `Servicio no disponible`,
              text: `El servicio de correo integrado no esta disponible por el momento`,
            });
          });
      }}
    >
      {({ errors }) => (
        <Form>
          <div>
            <label htmlFor="nombre">Ingrese su nombre </label>
            <Field type="text" id="name" name="name" placeholder="Ej: José" />
            <ErrorMessage
              name="name"
              component={() => <div className="error"> {errors.name} </div>}
            />
          </div>
          <div>
            <label htmlFor="apellido">Ingrese su apellido </label>
            <Field
              type="text"
              id="lasName"
              name="lastName"
              placeholder="Ej: Pérez"
            />
          </div>
          <div>
            <label htmlFor="phone">Ingrese su número de teléfono</label>
            <Field
              type="number"
              id="phone"
              name="phone"
              placeholder="Ej: 0963250600"
            />

            <ErrorMessage
              name="phone"
              component={() => <div className="error"> {errors.phone} </div>}
            />
          </div>
          <div>
            <label htmlFor="email">Ingrese su número de Correo</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Ej: ejemplo@gmail.com"
            />
            <ErrorMessage
              name="email"
              component={() => <div className="error"> {errors.email} </div>}
            />
          </div>
          <div>
            <label htmlFor="text">Escriba su mensaje</label>
            <Field
              type="textarea"
              id="text"
              name="text"
              placeholder="Escriba aqui su mensaje..."
            />
            <ErrorMessage
              name="text"
              component={() => <div className="error"> {errors.text} </div>}
            />
          </div>
          <button type="submit">Enviar Mensaje</button>
        </Form>
      )}
    </Formik>
  );
}
