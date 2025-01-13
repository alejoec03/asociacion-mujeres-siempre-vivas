import React, { useState } from "react";
import "../styles/componentes/ProductosDetalles.css";

const ProductosDetalles = ({ producto }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="producto-card">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="producto-imagen"
      />
      <h3>{producto.nombre}</h3>
      <button className="btn-detalles" onClick={handleOpenModal}>
        Más detalles
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseModal}>
              ✕
            </button>
            <h2>{producto.nombre}</h2>
            <div className="modal-info">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="modal-foto"
              />
              <div className="modal-descripcion">
                <h4>Descripción</h4>
                <p>{producto.descripcion}</p>
              </div>
              <div className="modal-utilidad">
                <h4>Utilidad del producto</h4>
                <p>{producto.utilidad}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosDetalles;

