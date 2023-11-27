import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <img src={Logo} alt="Logo" className="logoi" />
        <h1 className="logo">Hotel Santa Cecilia</h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/habitaciones">Habitaciones</Link>
          </li>
          
          <li>
            <Link to="/acerca-de">Acerca de</Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btnn">
            <Link to="/login">Iniciar Sesión</Link>
          </button>
          <button className="btnna">
            <Link to="/registrarse">Registrarse</Link>
          </button>
        </div>

        <div className="hambuger" onClick={handleClick}></div>
      </div>
    </div>
  );
};

export default Navbar;
