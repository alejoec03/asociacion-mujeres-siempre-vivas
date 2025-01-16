import React from 'react';
import '../styles/pages/Contacto.css';
import { InstagramLogo } from "phosphor-react";

export const Contacto = () => {

  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <h1>Contacto</h1>
        <p>Contacto: 3145625193</p>
        <p>Email: asociaciondemujerescampesinass@gmail.com</p>
        <p>
          <InstagramLogo size={32} alt="Instagram" className="icon" />
        
          <a href="https://www.instagram.com/aso.siemprevivas" target="_blank" rel="noopener noreferrer">
            @aso.siemprevivas
          </a>
        </p>
        <p>
          Vereda San José de La Montaña del corregimiento de San Cristóbal, del distrito de Medellín, Antioquía
        </p>
      </div>
      <div className="contacto-mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.998887802599!2d-75.6434!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468266e58f7a65%3A0x2b8d3bb646f6e7d2!2sSan%20Jos%C3%A9%20de%20La%20Montan%CC%83a%2C%20San%20Crist%C3%B3bal%2C%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1705184372948!5m2!1ses!2sco"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de la Asociación Mujeres Siempre Vivas"
        ></iframe>
      </div>
    </div>
  );
};


