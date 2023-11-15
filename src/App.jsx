import "./App.css";
import Logo from "./assets/logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <img src={Logo} alt="Logo" className="logo" />
      </ul>
      <ul className="nav-links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Acerca de</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
