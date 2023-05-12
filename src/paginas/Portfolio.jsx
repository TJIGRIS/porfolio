// importar react
import React from "react";

// importar motion de framer motion para las animaciones
import { motion } from "framer-motion";

// importar funcion de la animacion
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

// importar componentes de porfolio
import { ProyectosComponente } from "../componentes/porfolio/ProyectosComponente";

// importar api de los proyectos
import { proyectosPortfolio } from "../API/Apis";

export const Portfolio = () => {
  return (
    <section id="porfolio" className="porfolio">
      {/* titulo */}
      <h2 className="titulo rela">
        Port<span>folio</span>
        <motion.span
          variants={animacionApararicion(0.1)}
          initial="inicio"
          whileInView={"ver"}
          viewport={{ once: true, amount: 0.7 }}
          className="transicionW"
        ></motion.span>
      </h2>

      {/* proyectos realizados por mi */}
      <div className="porfolio__proyectos">
        {
          proyectosPortfolio.map(item => (
            <ProyectosComponente key={item.id} imagen={item.img} urlWeb={item.urlWeb} urlGit={item.urlGit} HTML={item.herramientas.html} SCSS={item.herramientas.scss} TAILWIND={item.herramientas.tailwind} JAVASCRIPT={item.herramientas.javascript} VITE={item.herramientas.vite} />
          ))
        }
      </div>
    </section>
  );
};
