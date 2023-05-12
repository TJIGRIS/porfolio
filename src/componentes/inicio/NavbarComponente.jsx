// importar react
import React, { useState } from "react";

// importar motion para la funcionalidad de las animaciones
import { motion } from "framer-motion";

// importar la funcion de la animacion
import { animacionApararicion } from "../../assets/FramerMotion/animaciones";

// impportar icons de react icons
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

export const NavbarComponente = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="active">
      <div className="nav contenido rela">
        {/* logo */}
        <div className="nav__logo rela">
          <a href="#">TJIGRIS</a>

          <motion.span
            variants={animacionApararicion(0)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: true, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </div>

        {/* links */}
        <ul
          className={
            toggle == false ? "nav__links rela" : "nav__links rela active"
          }
        >
          <li className="nav__links-link">
            <a onClick={() => setToggle(!toggle)} href="#inicio">
              Inicio
            </a>
          </li>
          <li className="nav__links-link">
            <a onClick={() => setToggle(!toggle)} href="#porfolio">
              Portfolio
            </a>
          </li>
          <li className="nav__links-link">
            <a onClick={() => setToggle(!toggle)} href="#sobreMi">
              Sobre Mí
            </a>
          </li>
          <li className="nav__links-link">
            <a onClick={() => setToggle(!toggle)} href="#habilidades">
              Habilidades
            </a>
          </li>
          <li className="nav__links-link">
            <a onClick={() => setToggle(!toggle)} href="#contactame">
              Contáctame
            </a>
          </li>

          <motion.span
            variants={animacionApararicion(0.2)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: true, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </ul>

        {/* barras */}
        <div className="toggle" onClick={() => setToggle(!toggle)}>
          {toggle == true ? (
            <AiOutlineClose className="icon" />
          ) : (
            <HiBars3 className="icon" />
          )}
        </div>
      </div>
    </nav>
  );
};
