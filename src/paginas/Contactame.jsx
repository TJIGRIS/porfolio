// importar react
import React from "react";

export const Contactame = () => {
  return (
    <section id="contactame" className="contactame">
      {/* titulo */}
      <h2 className="contactame__titulo titulo ">
        Contác<span>tame</span>
      </h2>

      {/* formulario */}
      <form action="" className="contactame__form">
        <div className="contactame__form-f ">
          <input type="text" name="" id="" placeholder="Nombre Completo" />
          <input type="number" name="" id="" placeholder="Número Teléfonico" />

        </div>

        <div className="rela">
          <input
            className="contactame__form-e "
            type="email"
            name=""
            id=""
            placeholder="Correo Electrónico"
          />
        </div>

        <div className="">
          <textarea
            className="contactame__form-a"
            name=""
            id=""
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        <button className="btn">
          Enviar
        </button>
      </form>
    </section>
  );
};
