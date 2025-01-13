import React, { useState } from "react";
import "./MujerDetalles.css";

const MujerDetalles = ({ mujer }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mujer-card">
      <img src={mujer.foto} alt={mujer.nombre} className="mujer-foto" />
      <h3>{mujer.nombre}</h3>
      <button className="btn-detalles" onClick={handleOpenModal}>
        Más detalles
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseModal}>
              ✕
            </button>
            <h2>{mujer.nombre}</h2>
            <div className="modal-info">
              <img src={mujer.foto} alt={mujer.nombre} className="modal-foto" />
              <div className="modal-descripcion">
                <h4>Descripción</h4>
                <p>{mujer.descripcion}</p>
              </div>
            </div>
            <div className="modal-historia">
              <h4>Historia</h4>
              <p>{mujer.historia}</p>
            </div>
            <div className="modal-proceso">
              <h4>Proceso del aceite de manzanilla</h4>
              <img src={mujer.proceso} alt="Proceso" className="modal-proceso-img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MujerDetalles;
