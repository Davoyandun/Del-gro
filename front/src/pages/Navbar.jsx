import React from "react";
import iconProducts from "../styles/images/iconProducts.svg";
import iconAbout from "../styles/images/iconAbout.svg";
import iconBlog from "../styles/images/iconBlog.svg";
import iconContact from "../styles/images/iconContact.svg";
import iconLogo from "../styles/images/iconLogo.svg";
import style from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <a href="/" className={style.logo}>
          <img src={iconLogo} alt="Img No Found"   width= "200"
     className={style.img} />
        </a>
        <ul className={style.list}>
          <li className={style.item}>
            <a href="/products" className={style.linck}>
              <img
                src={iconProducts}
                alt="Img No Found"
                className={style.icon}
              />
              <p className={style.text}>Productos</p>
            </a>
          </li>
          <li className={style.item}>
            <a href="/blog" className={style.linck}>
              <img src={iconBlog} alt="Img No Found" className={style.icon} />
              <p className={style.text}>Noticias</p>
            </a>
          </li>
          <li className={style.item}>
            <a href="/about" className={style.linck}>
              <img src={iconAbout} alt="Img No Found" className={style.icon} />
              <p className={style.text}> Sobre Nosotros</p>
            </a>
          </li>
          <li className={style.item}>
            <a href="/contacts" className={style.linck}>
              <img src={iconContact} alt="Img No Found" className={style.icon} />
              <p className={style.text}> Contactos</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
