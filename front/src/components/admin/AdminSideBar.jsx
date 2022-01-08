import React from "react";
import { NavLink } from "react-router-dom";
import {GrUserAdmin} from "react-icons/gr"
import style from "../../styles/AdminSideBar.module.css"



export default function AdminSideBar() {
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.avatar}>
            <GrUserAdmin />
        </div>
        <ul className={style.navItems}>
          <li className={style.navItem}>
            <NavLink to="/admin" className={style.item} exact>
              Productos
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/admin/brands" className={style.item} exact>
              Marcas
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/admin/crops" className={style.item} exact>
              Cultivos
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/admin/pests" className={style.item} exact>
              Plagas
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/admin/posts" className={style.item} exact>
              Noticias
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/admin/carrusel" className={style.item} exact>
              Carrusel
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>
            <NavLink to="/contact" className={style.item} exact>
              salir
            </NavLink>
            Developer <b>David Yandun</b>  <br/>
          </p>
        </footer>
      </nav>
    </div>
  );
}
