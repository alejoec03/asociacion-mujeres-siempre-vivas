import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/pages/Carrito.css";
import producto1 from '/src/assets/imagenes/producto1.jpg';
import producto2 from '/src/assets/imagenes/producto2.jpg';
import producto3 from '/src/assets/imagenes/producto3.jpg';
import producto4 from '/src/assets/imagenes/producto4.jpg';
import producto5 from '/src/assets/imagenes/producto5.jpg';
import producto6 from '/src/assets/imagenes/producto6.jpg';

export const Carrito = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const productosData = [
    {
      id: 1,
      nombre: "Aceite de manzanilla",
      imagen: "/src/assets/imagenes/producto1.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Aceite esencial de manzanilla para uso terapéutico.",
      descripcionlarga: "El aceite de manzanilla es un extracto natural que se caracteriza por sus propiedades calmantes y antiinflamatorias. Ideal para masajes terapéuticos, cuidado de la piel y relajación, este aceite ayuda a aliviar el estrés, reducir dolores musculares y mejorar la calidad del sueño. Su fórmula concentrada conserva los beneficios naturales de la manzanilla, ofreciendo un producto de alta calidad para el bienestar físico y emocional.",
      utilidad: "Sirve para aliviar tensiones musculares, reducir el estrés, mejorar la calidad del sueño y calmar irritaciones en la piel.",
      precio: 20000,
    },
    {
      id: 2,
      nombre: "Shampoo de romero",
      imagen: "/src/assets/imagenes/producto2.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Shampoo natural hecho con extracto de romero.",
      descripcionlarga: "El shampoo de romero es un producto natural formulado para fortalecer el cabello y estimular su crecimiento. Rico en nutrientes y antioxidantes, este shampoo limpia profundamente el cuero cabelludo mientras promueve la salud capilar. Su fórmula suave y libre de químicos agresivos lo hace ideal para todo tipo de cabello, ayudando a prevenir la caída y a mantener un cabello fuerte, brillante y saludable.",
      utilidad: "Sirve para fortalecer el cabello, prevenir la caída, estimular el crecimiento y mantener el cuero cabelludo saludable.",
      precio: 18000,
    },
    {
      id: 3,
      nombre: "Glicerina de romero",
      imagen: "/src/assets/imagenes/producto3.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Hidratante natural con extracto de romero.",
      descripcionlarga: "La glicerina de romero es un hidratante natural que combina las propiedades emolientes de la glicerina con los beneficios revitalizantes del romero. Este producto ayuda a mantener la piel suave, hidratada y protegida frente a los factores ambientales. Es especialmente útil para pieles secas y sensibles, proporcionando una hidratación profunda y una sensación refrescante.",
      utilidad: "Sirve para hidratar profundamente la piel, revitalizarla y protegerla contra la sequedad y agentes externos.",
      precio: 15000,
    },
    {
      id: 4,
      nombre: "Labial natural",
      imagen: "/src/assets/imagenes/producto4.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Labial hidratante con ingredientes naturales.",
      descripcionlarga: "El labial natural está elaborado con una mezcla de ingredientes orgánicos que nutren y protegen los labios. Su fórmula hidratante proporciona una textura suave, evitando la resequedad y manteniendo los labios humectados durante todo el día. Disponible en tonos naturales, este labial no solo embellece, sino que también cuida la salud de tus labios.",
      utilidad: "Sirve para hidratar los labios, protegerlos contra la resequedad y aportar un toque de color natural.",
      precio: 10000,
    },
    {
      id: 5,
      nombre: "Aceite de finas hierbas",
      imagen: "/src/assets/imagenes/producto5.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Aceite gourmet de finas hierbas.",
      descripcionlarga: "El aceite de finas hierbas es un producto gourmet diseñado para realzar el sabor de tus comidas. Elaborado con una cuidadosa selección de hierbas frescas, este aceite es ideal para aderezar ensaladas, pastas, carnes y platos especiales. Además de su sabor único, aporta beneficios antioxidantes gracias a las propiedades naturales de las hierbas utilizadas.",
      utilidad: "Sirve para realzar el sabor de las comidas, aderezar ensaladas y platos especiales, además de aportar beneficios antioxidantes.",
      precio: 25000,
    },
    {
      id: 6,
      nombre: "Aceite de manzanilla",
      imagen: "/src/assets/imagenes/producto6.jpg", // Reemplaza con la URL real de la imagen
      descripcion: "Aceite esencial de manzanilla para uso terapéutico.",
      descripcionlarga: "El aceite esencial de manzanilla es un extracto puro conocido por sus propiedades relajantes, antiinflamatorias y calmantes. Es ideal para ser utilizado en masajes terapéuticos, baños aromáticos o como parte de tu rutina diaria de cuidado de la piel. Su delicado aroma floral también ayuda a reducir el estrés y promover un sueño reparador. Perfecto para quienes buscan bienestar físico y emocional, este aceite es un aliado natural en el cuidado integral.",
      utilidad: "Sirve para masajes terapéuticos, aliviar el estrés, promover el sueño reparador y calmar la piel inflamada o sensible.",
      precio: 20000,
    },
  ];

  const productosEnCarrito = productosData.filter((producto) => cartItems[producto.id]);
  const total = productosEnCarrito.reduce(
    (acc, producto) => acc + producto.precio * cartItems[producto.id],
    0
  );

  return (
    
    <div className="carrito-page">
      <h1>Carrito de Compras</h1>
      {productosEnCarrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-list">
            {productosEnCarrito.map((producto) => (
              <div key={producto.id} className="carrito-item">
                <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
                <div className="carrito-detalle">
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio.toLocaleString()}</p>
                  <p>Cantidad: {cartItems[producto.id]}</p>
                  <p>Subtotal: ${(producto.precio * cartItems[producto.id]).toLocaleString()}</p>
                  <button
                    className="btn btn-eliminar"
                    onClick={() => removeFromCart(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="carrito-resumen">
            <h2>Total: ${total.toLocaleString()}</h2>
            <div className="botones-finalizar">
              <button className="btn btn-realizar-compra">Realizar compra</button>
              <button className="btn btn-vaciar-carrito" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
