import React from "react";
import { motion } from "framer-motion";
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiVite,
} from "react-icons/si";

export const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades">
      <h2 className="habilidades__titulo rela">
        Habilidades
        <motion.span
          variants={animacionApararicion(0.1)}
          initial="inicio"
          whileInView={"ver"}
          viewport={{ once: false, amount: 0.7 }}
          className="transicionW"
        ></motion.span>
      </h2>

      <div className="habilidades__container">
        <article className="habilidades__container-front">
          <h3>Frontend</h3>
          <div className="front">
            <div className="front__item">
              <div className="front__logo">
                <SiHtml5 className="icon" />
              </div>

              <div className="front__info">
                <h4>HTML</h4>
                <p>Intermedio</p>
              </div>
            </div>

            <div className="front__item">
              <div className="front__logo">
                <SiHtml5 className="icon" />
              </div>

              <div className="front__info">
                <h4>HTML</h4>
                <p>Intermedio</p>
              </div>
            </div>
          </div>
        </article>

        <article className="habilidades__container-backend">
          <h3>backend</h3>

          <div className="backend">
            <div className="backend__item">
              <div className="backend__logo">
                <SiHtml5 className="icon" />
              </div>

              <div className="backend__info">
                <h4>HTML</h4>
                <p>Intermedio</p>
              </div>
            </div>

            <div className="backend__item">
              <div className="backend__logo">
                <SiHtml5 className="icon" />
              </div>

              <div className="backend__info">
                <h4>HTML</h4>
                <p>Intermedio</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
