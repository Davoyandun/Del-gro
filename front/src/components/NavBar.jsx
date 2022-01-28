import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import iconProducts from "../styles/images/iconProducts.svg";
import iconAbout from "../styles/images/iconAbout.svg";
import iconBlog from "../styles/images/iconBlog.svg";
import iconContact from "../styles/images/iconContact.svg";
import Logo from "../styles/images/Logo.png";
import style from "../styles/Navbar.module.css";

import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light ">
      <Container>
        <Navbar.Brand>
          <NavLink to='/home'>
            <img className={style.logo} src={Logo} alt="Imagen No Encontrada" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <NavLink to="/home/products" className={style.item}>
              <img
                className={style.imagen}
                src={iconProducts}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Productos</h5>
            </NavLink>
            <NavLink to="/home/blogs" className={style.item}>
              {" "}
              <img
                className={style.imagen}
                src={iconBlog}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Noticias</h5>
            </NavLink>
            <NavLink to="/home/about" className={style.item}>
              {" "}
              <img
                className={style.imagen}
                src={iconAbout}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Nosotros</h5>
            </NavLink>
            <NavLink to="/home/contacts" className={style.item}>
              {" "}
              <img
                className={style.imagen}
                src={iconContact}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Contactos</h5>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <>
    <Outlet/>
    </>
    
    </>
   
  );
}
