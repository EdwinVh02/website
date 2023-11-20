import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <img src={Logo} alt="Logo" className="logo" />
      </ul>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="acerca-de">Acerca de</Link>
        </li>
        <li>{/* <a href="#">Contacto</a> */}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
