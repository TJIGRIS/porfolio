// importar react
import React from "react";

// importar componentes
import { NavbarComponente } from "../componentes/inicio/NavbarComponente";
import { InicioComponente } from "../componentes/inicio/InicioComponente";

export const Inicio = () => {
  return (
    <header id="inicio">
      {/* navbar */}
      <NavbarComponente />

      {/* inicio */}
      <InicioComponente />
    </header>
  );
};
