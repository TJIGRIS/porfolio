// importar react, useRef
import React, { useRef } from 'react';

// importar emailjs
import emailjs from '@emailjs/browser';

export const Contactame = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      emailjs.sendForm('portfolio', 'template_9oappor', form.current, 'DgZ6w8vzLHsyWBFfJ')
        .then((result) => {
          console.log(result.text);
          form.current.reset();
        }, (error) => {
          console.log(error.text);
        });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  };


  return (
    <section id="contactame" className="contactame">
      {/* titulo */}
      <h2 className="contactame__titulo titulo ">
        Contác<span>tame</span>
      </h2>

      {/* formulario */}
      <form ref={form} onSubmit={sendEmail} className="contactame__form">
        <div className="contactame__form-f ">
          <input type="text" required name="nombre" id="nombre" autoComplete='off' placeholder="Nombre Completo" />
          <input type="number" name="telefono" id="telefono" autoComplete='off' placeholder="Número Teléfonico" />
        </div>

        <div className="rela">
          <input
            required
            className="contactame__form-e "
            type="email"
            autoComplete='off'
            name="email"
            id="email"
            placeholder="Correo Electrónico"
          />
        </div>

        <div className="">
          <textarea
            required
            className="contactame__form-a"
            name="mensaje"
            id="mensaje"
            placeholder="Escribe tu mensaje"
            autoComplete='off'
          ></textarea>
        </div>

        <input type="submit" className="btn" value="Enviar" />
      </form>
    </section>
  );
};

