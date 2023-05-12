// importar react
import React from "react";

// importar icono de react icons
import { AiOutlineArrowUp } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="copyright">
          © 2023 Todos los derechos reservados. TJIGRIS.
        </div>

        <a href="#inicio" className="btn">
          <AiOutlineArrowUp className="icon" />
        </a>
      </div>
    </div>
  );
};
