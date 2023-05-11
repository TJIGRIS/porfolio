import React from "react";
import { Inicio } from "./paginas/inicio";
import { Porfolio } from "./paginas/Porfolio";
import { SobreMi } from "./paginas/SobreMi";
import { Habilidades } from "./paginas/Habilidades";
import { Contactame } from "./paginas/Contactame";
import { Footer } from "./paginas/Footer";

function App() {
  return (
    <div>
      <div className="container">
        <Inicio />
        <Porfolio />
        <SobreMi />
        <Habilidades />
        <Contactame />
      </div>
      <Footer />
    </div>
  );
}

export default App;
