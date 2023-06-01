import React from "react";
import { useState } from "react";
import Mensaje from "./mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || presupuesto <= 0) {
      setMensaje("No es un presupuesto válido");
    } else {
      setMensaje("Si es un presupuesto válido");
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu Presupuesto"
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>{" "}
    </div>
  );
};

export default NuevoPresupuesto;
