import React from "react";
import { motion } from "framer-motion";
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

export const Contactame = () => {
  return (
    <section id="contactame" className="contactame">
      <h2 className="contactame__titulo rela">
        Contactame
        <motion.span
          variants={animacionApararicion(0.1)}
          initial="inicio"
          whileInView={"ver"}
          viewport={{ once: false, amount: 0.7 }}
          className="transicionW"
        ></motion.span>
      </h2>

      <form action="" className="contactame__form">
        <div className="contactame__form-f rela">
          <input type="text" name="" id="" placeholder="Nombre Completo" />
          <input type="number" name="" id="" placeholder="Numero Telefonico" />
          <motion.span
            variants={animacionApararicion(0.3)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </div>

        <div className="rela">
          <input
            className="contactame__form-e rela"
            type="email"
            name=""
            id=""
            placeholder="Correo Electronico"
          />
          <motion.span
            variants={animacionApararicion(0.5)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </div>

        <div className="rela">
          <textarea
            className="contactame__form-a"
            name=""
            id=""
            placeholder="Escribe tu mensaje"
          ></textarea>
          <motion.span
            variants={animacionApararicion(0.7)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </div>

        <button className="btn rela">
          Enviar
          <motion.span
            variants={animacionApararicion(0.9)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </button>
      </form>
    </section>
  );
};
