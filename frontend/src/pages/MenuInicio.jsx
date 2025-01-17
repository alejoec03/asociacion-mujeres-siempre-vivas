import React, { useState } from 'react';
import '../styles/pages/MenuInicio.css';
import mujeresgrupo from '/src/assets/imagenes/mujeresgrupo.jpg';
import womansilhouette from '/src/assets/imagenes/womansilhouette.jpg';
import mujercarmen from '/src/assets/imagenes/mujercarmen.png';
import mujer1 from '/src/assets/imagenes/mujer1.png';
import mujer2 from '/src/assets/imagenes/mujer2.png';
import mujer3 from '/src/assets/imagenes/mujer3.png';
import mujer4 from '/src/assets/imagenes/mujer4.png';
import mujer5 from '/src/assets/imagenes/mujer5.png';

const mujeresData = [
    {
        nombre: "Carmen Acevedo",
        descripcion: "Experta en plantas medicinales.",
        historia: "Carmen lidera iniciativas de transformación de plantas aromáticas para usos medicinales, promoviendo la salud desde la naturaleza.",
        foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
        proceso: '/src/assets/imagenes/mujercarmen.png', // Imagen del proceso
      },
    {
      nombre: "Nelly Bedoya",
      descripcion: "Especialista en producción de aceite de manzanilla.",
      historia: "Nelly trabaja con pasión para reactivar la economía local mediante la producción y comercialización de aceites esenciales.",
      foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
      proceso: '/src/assets/imagenes/mujer1.png', // Imagen del proceso
    },
    {
      nombre: "Marta Loaiza",
      descripcion: "Líder en la salvaguardia de semillas nativas.",
      historia: "Marta ha dedicado su vida a proteger las semillas ancestrales y fomentar la soberanía alimentaria en su comunidad.",
      foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
      proceso: "/src/assets/imagenes/mujer2.png", // Imagen del proceso
    },
    {
      nombre: "Diana Sierra",
      descripcion: "Defensora de la agroecología.",
      historia: "Diana combina su pasión por el medio ambiente y la agricultura para impulsar prácticas sostenibles en la vereda San José de la Montaña.",
      foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
      proceso: "/src/assets/imagenes/mujer3.png", // Imagen del proceso
    },
    {
      nombre: "Adriana Gómez",
      descripcion: "Guardiana de la memoria campesina.",
      historia: "Adriana documenta y difunde las tradiciones rurales, fortaleciendo el sentido de pertenencia y la identidad campesina.",
      foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
      proceso: "/src/assets/imagenes/mujer4.png", // Imagen del proceso
    },
    {
      nombre: "Lucía Restrepo",
      descripcion: "Pionera en el turismo rural.",
      historia: "Lucía ha transformado la forma en que las personas experimentan la ruralidad, desarrollando rutas turísticas basadas en la agroecología y las plantas aromáticas.",
      foto: "/src/assets/imagenes/womansilhouette.jpg", // Cambia por la ruta real de la imagen
      proceso: "/src/assets/imagenes/mujer5.png", // Imagen del proceso
    },

  // Agrega más mujeres aquí...
];

export const MenuInicio = () => {
  const [selectedMujer, setSelectedMujer] = useState(null);

  const openModal = (mujer) => {
    setSelectedMujer(mujer);
  };

  const closeModal = () => {
    setSelectedMujer(null);
  };

  return (
    
    <div className="menu-inicio">
      {/* Sección de encabezado */}
      <header className="menu-inicio-header">
        <h1>¡Cultivando raíces, construyendo futuro!</h1>
      </header>

      {/* Sección de "¿Quiénes somos?" */}
      <section className="quienes-somos">
        <h2>¿Quiénes Somos?</h2>
        <div className="quienes-somos-content">
          <img
            src={mujeresgrupo}
            alt="Grupo de Mujeres Siempre Vivas"
            className="quienes-somos-image"
            style={{ borderRadius: '10px', width: '600px', height: 'auto' }}
          />
          <p>
          En la Asociación Siempre Vivas, somos una organización sin ánimo de lucro comprometida con la 
          construcción de un territorio rural campesino inclusivo, con enfoque de género y un profundo 
          respeto por el intercambio generacional. Nos encontramos en la vereda San José de la Montaña, 
          en el corregimiento de San Cristóbal del distrito de Medellín, Antioquia.
          </p>
          
          <p>
          Unidas por nuestras raíces y visión, trabajamos cada día para fortalecer nuestra identidad, 
          empoderar a las mujeres campesinas y preservar nuestro patrimonio natural y cultural.
          </p>
        </div>
      </section>

      {/* Sección de "Mujeres Siempre Vivas" */}
      <section className="mujeres-siempre-vivas">
        <h2>Mujeres Siempre Vivas</h2>
        <div className="cards-container">
          {mujeresData.map((mujer, index) => (
            <div key={index} className="card">
              <img
                src={mujer.foto}
                alt={mujer.nombre}
                className="card-image"
              />
              <button className="card-button" onClick={() => openModal(mujer)}>
                Más detalles
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal para mostrar detalles de la mujer */}
      {selectedMujer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              ✕
            </button>
            <div className="close-modal:hover">


            <h4>{selectedMujer.nombre}</h4>
            </div>
            <div className="modal-info">
              <img src={selectedMujer.foto} alt={selectedMujer.nombre} className="modal-foto" />
              <div className="modal-descripcion">
                <h4>Descripción</h4>
                <p>{selectedMujer.descripcion}</p>
              </div>
            </div>
            <div className="modal-historia">
              <h4>Historia</h4>
              <p>{selectedMujer.historia}</p>
            </div>
            <div className="modal-proceso">
              <h4>Proceso del aceite de manzanilla</h4>
              <img src={selectedMujer.proceso} alt="Proceso" className="modal-proceso-img" />
            </div>
          </div>
        </div>
      )}

      <div>
      {/* Pie de página */}
      <footer className="footer">
        <p>
          Copyright © 2025 Asociación Mujeres Siempre Vivas. Todos los derechos
          reservados.
        </p>
      </footer>

    
      </div>
      
    </div>
  );
};

