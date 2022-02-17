import React from "react";
import { Formik, validateYupSchema } from "formik";

export default function Contacts() {
  return (
    <div>
      <h3>Contactos</h3>
      <p>Para nosotros es importante tu opinión es importante. </p>
      <Formik
        initialValues={{
          email: "",
          phone: "",
          name: "",
          lastName: "",
          text: "",
        }}

        validate={values => {
          const errors = {};
          if (!values.phone) {
            errors.phone = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
         
          return errors;
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="nombre">Ingrese su nombre </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: José"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="apellido">Ingrese su apellido </label>
              <input
                type="text"
                id="lasName"
                name="LastName"
                placeholder="Ej: Pérez"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="phone">Ingrese su número de teléfono</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Ej: 0963250600"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="email">Ingrese su número de Correo</label>
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder="Ej: ejemplo@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="text">Ingrese su número de teléfono</label>
              <input
                type="textarea"
                id="text"
                name="text"
                placeholder="Escriba aqui su mensaje..."
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
