import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div >
      <div >
        <div >
          <div>
            <h4>Enlaces</h4>
            <ul>
              <li>
                <Link to="/about">Conoce sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/posts">Noticias</Link>
              </li>
              <li>
                <Link to="/products">Productos</Link>
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
                <Link>Trabaja con nosotros</Link>
              </li>
              <li>
                <Link>Contacta con un asesor</Link>
              </li>
              <li>
                <button>Desarrollo</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
