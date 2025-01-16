import React, { useState, useContext  } from 'react';
import "../styles/pages/Productos.css";
import producto1 from '/src/assets/imagenes/producto1.jpg';
import producto2 from '/src/assets/imagenes/producto2.jpg';
import producto3 from '/src/assets/imagenes/producto3.jpg';
import producto4 from '/src/assets/imagenes/producto4.jpg';
import producto5 from '/src/assets/imagenes/producto5.jpg';
import producto6 from '/src/assets/imagenes/producto6.jpg';

//import { useCarrito } from "../context/CartContext";

import { CartContext } from "../context/CartContext";

const productosData = [
  {
    id: 1,
    nombre: "Aceite de manzanilla",
    imagen: "/src/assets/imagenes/producto1.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Aceite esencial de manzanilla para uso terapéutico.",
    descripcionlarga: "El aceite de manzanilla es un extracto natural que se caracteriza por sus propiedades calmantes y antiinflamatorias. Ideal para masajes terapéuticos, cuidado de la piel y relajación, este aceite ayuda a aliviar el estrés, reducir dolores musculares y mejorar la calidad del sueño. Su fórmula concentrada conserva los beneficios naturales de la manzanilla, ofreciendo un producto de alta calidad para el bienestar físico y emocional.",
    utilidad: "Sirve para aliviar tensiones musculares, reducir el estrés, mejorar la calidad del sueño y calmar irritaciones en la piel.",
    precio: "$20,000",
  },
  {
    id: 2,
    nombre: "Shampoo de romero",
    imagen: "/src/assets/imagenes/producto2.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Shampoo natural hecho con extracto de romero.",
    descripcionlarga: "El shampoo de romero es un producto natural formulado para fortalecer el cabello y estimular su crecimiento. Rico en nutrientes y antioxidantes, este shampoo limpia profundamente el cuero cabelludo mientras promueve la salud capilar. Su fórmula suave y libre de químicos agresivos lo hace ideal para todo tipo de cabello, ayudando a prevenir la caída y a mantener un cabello fuerte, brillante y saludable.",
    utilidad: "Sirve para fortalecer el cabello, prevenir la caída, estimular el crecimiento y mantener el cuero cabelludo saludable.",
    precio: "$18,000",
  },
  {
    id: 3,
    nombre: "Glicerina de romero",
    imagen: "/src/assets/imagenes/producto3.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Hidratante natural con extracto de romero.",
    descripcionlarga: "La glicerina de romero es un hidratante natural que combina las propiedades emolientes de la glicerina con los beneficios revitalizantes del romero. Este producto ayuda a mantener la piel suave, hidratada y protegida frente a los factores ambientales. Es especialmente útil para pieles secas y sensibles, proporcionando una hidratación profunda y una sensación refrescante.",
    utilidad: "Sirve para hidratar profundamente la piel, revitalizarla y protegerla contra la sequedad y agentes externos.",
    precio: "$15,000",
  },
  {
    id: 4,
    nombre: "Labial natural",
    imagen: "/src/assets/imagenes/producto4.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Labial hidratante con ingredientes naturales.",
    descripcionlarga: "El labial natural está elaborado con una mezcla de ingredientes orgánicos que nutren y protegen los labios. Su fórmula hidratante proporciona una textura suave, evitando la resequedad y manteniendo los labios humectados durante todo el día. Disponible en tonos naturales, este labial no solo embellece, sino que también cuida la salud de tus labios.",
    utilidad: "Sirve para hidratar los labios, protegerlos contra la resequedad y aportar un toque de color natural.",
    precio: "$10,000",
  },
  {
    id: 5,
    nombre: "Aceite de finas hierbas",
    imagen: "/src/assets/imagenes/producto5.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Aceite gourmet de finas hierbas.",
    descripcionlarga: "El aceite de finas hierbas es un producto gourmet diseñado para realzar el sabor de tus comidas. Elaborado con una cuidadosa selección de hierbas frescas, este aceite es ideal para aderezar ensaladas, pastas, carnes y platos especiales. Además de su sabor único, aporta beneficios antioxidantes gracias a las propiedades naturales de las hierbas utilizadas.",
    utilidad: "Sirve para realzar el sabor de las comidas, aderezar ensaladas y platos especiales, además de aportar beneficios antioxidantes.",
    precio: "$25,000",
  },
  {
    id: 6,
    nombre: "Aceite de manzanilla",
    imagen: "/src/assets/imagenes/producto6.jpg", // Reemplaza con la URL real de la imagen
    descripcion: "Aceite esencial de manzanilla para uso terapéutico.",
    descripcionlarga: "El aceite esencial de manzanilla es un extracto puro conocido por sus propiedades relajantes, antiinflamatorias y calmantes. Es ideal para ser utilizado en masajes terapéuticos, baños aromáticos o como parte de tu rutina diaria de cuidado de la piel. Su delicado aroma floral también ayuda a reducir el estrés y promover un sueño reparador. Perfecto para quienes buscan bienestar físico y emocional, este aceite es un aliado natural en el cuidado integral.",
    utilidad: "Sirve para masajes terapéuticos, aliviar el estrés, promover el sueño reparador y calmar la piel inflamada o sensible.",
    precio: "$20,000",
  },
];


export const Productos = () => {

  const [selectedProducto, setSelectedProducto] = useState(null);
  
  const openModal = (producto) => {
    setSelectedProducto(producto);
  };
  
  const closeModal = () => {
    setSelectedProducto(null);
  };

  const { cartItems, removeFromCart } = useContext(CartContext);



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
    <div className="productos-page">
      <h1>PRODUCTOS</h1>
      <div className="productos-container">
        {productosData.map((producto, index) => (
          <div key={index} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-imagen"
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="producto-precio">{producto.precio}</p>
            <div className="producto-botones">
              <button className="producto-detalles" onClick={() => openModal(producto)}>
                Más detalles
              </button>
              
              
              <div className="producto-botones">
              <div className="producto-contador">
                <button
                  className="btn btn-decrement"
                  onClick={() => handleDecrement(producto.id)}
                >
                  -
                </button>
                <span>{productQuantities[producto.id] || 1}</span>
                <button
                  className="btn btn-increment"
                  onClick={() => handleIncrement(producto.id)}
                >
                  +
                </button>
              </div>
              <button
                className="btn agregar-carrito"
                onClick={() => handleAddToCart(producto.id)}
              >
                Agregar al carrito
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar detalles de la mujer */}
      {selectedProducto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ✕
            </button>
            <h2>{selectedProducto.nombre}</h2>
            <div className="modal-info">
              <img src={selectedProducto.imagen} alt={selectedProducto.nombre} className="modal-foto" />
              <div className="modal-descripcion">
                <h4>Descripción</h4>
                <p>{selectedProducto.descripcionlarga}</p>
              </div>
            </div>
            <div className="modal-descripcion">
              <h4>Utilidad</h4>
              <p>{selectedProducto.utilidad}</p>
            </div>
            
          </div>
        </div>
      )}

      {/* Pie de página */}
      <footer className="footer">
        <p>
          Copyright © 2025 Asociación Mujeres Siempre Vivas. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>

    

  );
};
