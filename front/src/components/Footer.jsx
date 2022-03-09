import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormLogin from "./FormLogin";
import Cookies from "universal-cookie";

export default function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
let cookies = new Cookies()
const auth = cookies.get("auth");
console.log(auth, "esto esta en footer")

  return (
    <div>
      <div>
        <div>
          <div>
            <h4>Enlaces</h4>
            <ul>
              <li>
                <NavLink to="/about">Conoce sobre Nosotros</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Noticias</NavLink>
              </li>
              <li>
                <NavLink to="/products">Productos</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contactos</h4>
            <ul>
              <li>
                <p>Correo Empresa</p>
                <p>delagro2016@gmail.com</p>
              </li>
              <li>
                <p>Teléfono</p>
                <p>0963160500</p>
              </li>
              <li>
                <p>Direccion: </p>
                <p>Calle ni se cuanto y ni se como</p>
              </li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li>
                <NavLink to="/products">Trabaja con nosotros</NavLink>
              </li>
              <li>
                <NavLink to="/products">Contacta con un asesor</NavLink>
              </li>
              {!auth ? (<li onClick={handleShow}>
                Dashboard
              </li>) : (<li >
                <NavLink to="/admin"> Ingreso Dashboard</NavLink>
              </li>)  }
             
            </ul>
          </div>
        </div>
      </div>
      <FormLogin
      show = {show}
      handleClose = {handleClose}

      
      />
    </div>
  );
}
