import React from "react";
import iconProducts from "../styles/images/iconProducts.svg";
import iconAbout from "../styles/images/iconAbout.svg";
import iconBlog from "../styles/images/iconBlog.svg";
import iconContact from "../styles/images/iconContact.svg";
import Logo from "../styles/images/Logo.png";
import style from "../styles/Navbar.module.css";

import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg ="light ">
      <Container>
        <Navbar.Brand href="/">
          <img className={style.logo} src={Logo} alt="Imagen No Encontrada" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/products" className={style.item}>
              <img
                className={style.imagen}
                src={iconProducts}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Productos</h5>
            </Nav.Link>
            <Nav.Link href="/blog" className={style.item}>
              {" "}
              <img
                className={style.imagen}
                src={iconBlog}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Noticias</h5>
            </Nav.Link>
            <Nav.Link href="/blog" className={style.item}>
              {" "}
              <img
                className={style.imagen}
                src={iconAbout}
                alt="Imagen No Encontrada"
              />
              <h5 className={style.text}>Nosotros</h5>
            </Nav.Link>
            <Nav.Link href="/blog" className={style.item}>
              {" "}
              <img
                className={style.imagen}
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
