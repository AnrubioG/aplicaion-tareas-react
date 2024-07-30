import "./App.css";
import React from "react";
import ilustracion from "/img/ilustracion-1.png";
import Tarea from "./Components/Tarea";
import Formulario from "./Components/Formulario";
import ListaTareas from "./Components/ListaTareas";

function App() {
  return (
    <div className="App">
      <div className="inicio">
        <div className="ilustracion">
          <img src={ilustracion} alt="" />
        </div>
        <h1>MIS TAREAS</h1>
        {/* <Formulario></Formulario> */}
      </div>
      <div className="tareas-lista-principal">
        <ListaTareas></ListaTareas>
        {/* <Tarea texto="Aprender React"></Tarea> */}
      </div>
    </div>
  );
}

export default App;
