//importar react
import React from "react";

// importar motion de framer motion para animaciones
import { motion } from "framer-motion";

// importar funcion de la animacion
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

// importar icones de react icons
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiMysql,
} from "react-icons/si";

export const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades">
      {/* titulo */}
      <h2 className="titulo">
        Habili<span>dades</span>
      </h2>

      <div className="habilidades__container">
        <article className="habilidades__container-dev rela">
          <h3>Frontend</h3>

          <div className="habilidades__container-dev-contenido">
            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiHtml5 className="icon" />
              </div>

              <div className="">
                <h4>HTML</h4>
                <p>Intermedio</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiCss3 className="icon" />
              </div>

              <div className="">
                <h4>CSS</h4>
                <p>Intermedio</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiSass className="icon" />
              </div>

              <div className="">
                <h4>SASS</h4>
                <p>Basico</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiTailwindcss className="icon" />
              </div>

              <div className="">
                <h4>tailwindcss</h4>
                <p>Basico</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiJavascript className="icon" />
              </div>

              <div className="">
                <h4>Javascript</h4>
                <p>Basico</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiReact className="icon" />
              </div>

              <div className="">
                <h4>React</h4>
                <p>Basico</p>
              </div>
            </div>
          </div>

          <motion.span
            variants={animacionApararicion(0.2)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </article>

        <article className="habilidades__container-dev rela">
          <h3>Backend</h3>

          <div className="habilidades__container-dev-contenido habilidades__container-dev-contenido-midificado">
            <div className="habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiPhp className="icon" />
              </div>

              <div className="">
                <h4>PHP</h4>
                <p>Basico</p>
              </div>
            </div>

            <div className="habilidades__container-dev-contenido-elemento habilidades__container-dev-contenido-elemento">
              <div className="">
                <SiMysql className="icon" />
              </div>

              <div className="">
                <h4>MySql</h4>
                <p>Basico</p>
              </div>
            </div>
          </div>

          <motion.span
            variants={animacionApararicion(0.2)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </article>
      </div>
    </section>
  );
};
