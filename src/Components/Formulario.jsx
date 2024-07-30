import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Formulario.css";

function Formulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(nuevaTarea);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="tarea-input"
        placeholder="Ingresa el titulo de la tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default Formulario;
