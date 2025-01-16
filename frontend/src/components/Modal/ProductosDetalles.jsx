import React, { useState } from "react";
import "../styles/componentes/ProductosDetalles.css";

import producto1 from '/src/assets/imagenes/producto1.jpg';
import producto2 from '/src/assets/imagenes/producto2.jpg';
import producto3 from '/src/assets/imagenes/producto3.jpg';
import producto4 from '/src/assets/imagenes/producto4.jpg';
import producto5 from '/src/assets/imagenes/producto5.jpg';
import producto6 from '/src/assets/imagenes/producto6.jpg';

const ProductosDetalles = ({ producto }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };





  const { addToCart } = useContext(CartContext);
  const [productQuantities, setProductQuantities] = useState({});

  const handleIncrement = (productId) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (productId) => {
    const quantity = productQuantities[productId] || 1; // Por defecto, al menos 1 producto
    addToCart({ id: productId, quantity });
    alert(`Se agregaron ${quantity} productos al carrito.`);
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

