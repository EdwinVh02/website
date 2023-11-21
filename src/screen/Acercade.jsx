import { Link } from "react-router-dom";

const AcercaDe = () => {
  return (
    <div>
      <div className="about-container">
        <h2>Acerca de Nosotros</h2>
        <p></p>
        <h3>Políticas</h3>
        <ul>
          <li>
            <Link to="/politicas-privacidad">Política de privacidad</Link>
          </li>
          <li>
            <Link to="/politicas-cookies">Política de cookies</Link>
          </li>
          <Link to="/Terminos-condiciones">Términos y condiciones</Link>
        </ul>
      </div>
    </div>
  );
};

export default AcercaDe;
