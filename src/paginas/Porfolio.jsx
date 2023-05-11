// importar react
import React from "react";

// importar motion de framer motion para las animaciones
import { motion } from "framer-motion";

// importar funcion de la animacion
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

// importar componentes de porfolio
import { proyectosComponente } from "../componentes/porfolio/proyectosComponente";

export const Porfolio = () => {
  return (
    <section id="porfolio" className="porfolio">
      {/* titulo */}
      <h2 className="porfolio__titulo titulo rela">
        Por<span>folio</span>
        <motion.span
          variants={animacionApararicion(0.1)}
          initial="inicio"
          whileInView={"ver"}
          viewport={{ once: false, amount: 0.7 }}
          className="transicionW"
        ></motion.span>
      </h2>

      {/* proyectos realizados por mi */}
      <div className="porfolio__proyectos">
        <proyectosComponente />
        <proyectosComponente />
        <proyectosComponente />
        <proyectosComponente />
      </div>
    </section>
  );
};
