// frontend/src/pages/Ecoturismo.jsx
import React, { useState } from 'react';
import '../styles/pages/Ecoturismo.css';
import RutasDetalles from '../components/Modal/EcoturismoDetalles.jsx';
import RutaAgroecologica from '/src/assets/imagenes/RutaAgroecologica.png';
import RutaAromaticas from '/src/assets/imagenes/RutaAromaticas.png';
import RutaCampesino from '/src/assets/imagenes/RutaCampesino.png';

const rutas = [
  {
    id: 1,
    titulo: 'Ruta de la agroecología',
    descripcion: 'La ruta de la agroecología nace como un escenario que impulsa la autonomía económica de las mujeres desde la producción agrícola con enfoque agroecológico. Aquí no solo encontrarás un proceso de siembra familiar, sino que además reconocerás el ciclo productivo que aporta al bienestar individual y comunitario como una apuesta política y organizativa de las mujeres.',
    imagen: '/src/assets/imagenes/RutaAgroecologica.png'
  },
  {
    id: 2,
    titulo: 'Ruta de las aromáticas',
    descripcion: 'La Ruta de las Aromáticas nació durante la pandemia de COVID-19 como una adaptación al entorno virtual, destacando las plantas medicinales de la vereda San José de la Montaña. Este proyecto permitió reconocerlas como elementos ancestrales y adaptarlas a la realidad campesina promovida por la Asociación de Mujeres Campesinas Siemprevivas.',
    imagen: '/src/assets/imagenes/RutaAromaticas.png'
  },
  {
    id: 3,
    titulo: 'Ruta del campesino',
    descripcion: 'La Ruta del Campesino es una experiencia única que celebra la vida rural y las tradiciones campesinas de la vereda San José de la Montaña. A través de este recorrido, los visitantes pueden conocer de cerca las prácticas agrícolas sostenibles, participar en actividades culturales y disfrutar de la riqueza natural de la región, fortaleciendo el vínculo entre la comunidad y quienes valoran su labor y legado.',
    imagen: '/src/assets/imagenes/RutaCampesino.png'
  }
];

export const Ecoturismo = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [rutaSeleccionada, setRutaSeleccionada] = useState(null);

  const abrirModal = (ruta) => {
    setRutaSeleccionada(ruta);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setRutaSeleccionada(null);
  };

  return (
    <div class="ecoturismo-page">
    <div className="ecoturismo-container">
      <h1>Conoce nuestras rutas</h1>
      <p>Descubre experiencias únicas de turismo rural, agroecología y medicina alternativa en la vereda San José de la Montaña. Vive el legado ancestral y el trabajo comunitario de la Asociación de Mujeres Siempre Vivas.</p>
      <div className="rutas-lista">
        {rutas.map((ruta) => (
          <div key={ruta.id} className="ruta-item">
            
            <img src={ruta.imagen} alt={ruta.titulo} />

            <h2>{ruta.titulo}</h2> 
            
            <p>{ruta.descripcion}</p>
            <button onClick={() => abrirModal(ruta)}>Más detalles</button>
          </div>
        ))}
      </div>
      {modalAbierto && (
        <RutasDetalles ruta={rutaSeleccionada} cerrarModal={cerrarModal} />
      )}
    </div>
    </div>
  );
};


