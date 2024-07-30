import React from "react";
import "../css/ListaDeTareas.css";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import { useState } from "react";

function ListaTareas(params) {
  const [tareas, setTarea] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTarea(tareasActualizadas);
    } else {
      alert("ingresa el titulo de tu tarea");
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTarea(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada,
        };
      }
      return tarea;
    });

    setTarea(tareasActualizadas);
  };

  return (
    <div>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaTareas;
