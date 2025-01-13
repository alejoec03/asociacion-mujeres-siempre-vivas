// frontend/src/components/Modal/RutasDetalles.jsx
import React from 'react';

import "../../styles/pages/Ecoturismo.css";

const RutasDetalles = ({ ruta, cerrarModal }) => {
  return (
    <div className="modal-overlay" onClick={cerrarModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{ruta.titulo}</h2>
        <img src={ruta.imagen} alt={ruta.titulo} />
        <p>{ruta.descripcion}</p>
        <button onClick={cerrarModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default RutasDetalles;