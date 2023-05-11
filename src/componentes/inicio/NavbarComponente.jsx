// importar react
import React from "react";

// importar motion para la funcionalidad de las animaciones
import { motion } from "framer-motion";

// importar la funcion de la animacion
import { animacionApararicion } from "../../assets/FramerMotion/animaciones";

// impportar icons de react icons
import { AiOutlineClose } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";

export const NavbarComponente = () => {
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
        <ul className="nav__links rela">
          <li className="nav__links-link active">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="nav__links-link">
            <a href="#porfolio">Portfolio</a>
          </li>
          <li className="nav__links-link">
            <a href="#sobreMi">Sobre Mi</a>
          </li>
          <li className="nav__links-link">
            <a href="#habilidades">Habilidades</a>
          </li>
          <li className="nav__links-link">
            <a href="#contactame">Contactame</a>
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
        <div className="toggle">
          <HiBars3 className="icon" />
          {/* {document.body.scrollWidth >= 100 ? <HiBars3 /> : <AiOutlineClose />} */}
        </div>
      </div>
    </nav>
  );
};
