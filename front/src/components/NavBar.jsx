import React from "react";
import iconProducts from "../styles/images/iconProducts.svg";
import iconAbout from "../styles/images/iconAbout.svg";
import iconBlog from "../styles/images/iconBlog.svg";
import iconContact from "../styles/images/iconContact.svg";
import Logo from "../styles/images/Logo.png";
import style from "../styles/Navbar.module.css";

import { Navbar, Nav, Container, NavLink } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="dark">
      <Container  >
        <Navbar.Brand href="#">
          <NavLink to="/">
            <img className="Logo" src={Logo} alt="Imagen No Encontrada" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  >
            <Nav.Link href="/products" >
              <img
                className="Logo"
                src={iconProducts}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Productos</h5>
            </Nav.Link>
            <Nav.Link href="/blog">
              {" "}
              <img className="Logo" src={iconBlog} alt="Imagen No Encontrada" />
              <h5 className={style.text}>Noticias</h5>
            </Nav.Link>
            <Nav.Link href="/blog">
              {" "}
              <img
                className="Logo"
                src={iconAbout}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Nosotros</h5>
            </Nav.Link>
            <Nav.Link href="/blog">
              {" "}
              <img
                className="Logo"
                src={iconContact}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Contactos</h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
