// importar react
import React from "react";

// importar motion de framer motion para las animaciones
import { motion } from "framer-motion";

// importar funcion de la animacion
import { animacionApararicion } from "../../assets/FramerMotion/animaciones";

// importar iconos de react icons
import { DiHtml5, DiSass, DiJavascript1, DiGithubBadge } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

// importar imagenes
import imgMientras from "../../assets/imagenes/segundoProyecto.png";

export const ProyectosComponente = ({ imagen, urlWeb, urlGit }) => {
  return (
    <article className="porfolio__proyectos-web rela">
      {/* imagen del proyecto */}
      <div className="porfolio__proyectos-web-imagen">
        <img src={imagen} alt="" />

        <div className="porfolio__proyectos-web-imagen-ver">
          <a href={urlWeb} target="_blank">
            <CgWebsite className="icon" />
          </a>

          <a href={urlGit} target="_blank">
            <DiGithubBadge className="icon" />
          </a>
        </div>
      </div>

      {/* herramientas usadas en el proyecto */}
      <div className="porfolio__proyectos-web-info">
        <DiHtml5 className="icon" />
        <DiSass className="icon" />
        <DiJavascript1 className="icon" />
        <TbBrandVite className="icon" />
      </div>

      <motion.span
        variants={animacionApararicion(0.4)}
        initial="inicio"
        whileInView={"ver"}
        viewport={{ once: false, amount: 0.7 }}
        className="transicionW"
      ></motion.span>
    </article>
  );
};
