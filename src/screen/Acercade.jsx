// AcercaDe.js
import React, { useState } from "react";
import Politicas from "./PoliticasDePrivacidad";

const AcercaDe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="about-container">
        <h2>Acerca de Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          bibendum justo, et tristique massa venenatis vitae. Proin fermentum
          diam sed ligula feugiat, in congue sapien dapibus.
        </p>
        <h3>Políticas</h3>
        <ul>
          <li>
            <a href="#" onClick={handleOpenModal}>
              Política de privacidad
            </a>
          </li>
          <li>Política de cookies</li>
          <li>Términos y condiciones</li>
        </ul>
      </div>

      {showModal && <Politicas onClose={handleCloseModal} />}
    </div>
  );
};

export default AcercaDe;
