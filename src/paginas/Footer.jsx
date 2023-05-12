import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animacionApararicion } from "../assets/FramerMotion/animaciones";

export const Footer = () => {
  return (
    <motion.div className="footer rela">
      <div className="container">
        <div className="copyright">
          © 2023 Todos los derechos reservados. TJIGRIS.
          <motion.span
            variants={animacionApararicion(0.11)}
            initial="inicio"
            whileInView={"ver"}
            viewport={{ once: false, amount: 0.7 }}
            className="transicionW"
          ></motion.span>
        </div>

        <a href="#inicio" className="btn">
          <AiOutlineArrowUp className="icon" />
        </a>
      </div>
    </motion.div>
  );
};
