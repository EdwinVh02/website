import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./screen/Inicio";
import AcercaDe from "./screen/Acercade";
import PoliticasCookie from "./screen/PolíticadeCookies";
import PoliticasP from "./screen/PoliticasDePrivacidad";
import TerminosC from "./screen/TerminosCondiciones";
import Habitaciones from "./screen/Habitaciones";
import Login from "./screen/Login";
import Registrarse from "./screen/Registrarse";
import Navbar from "./screen/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/politicas-cookies" element={<PoliticasCookie />} />
        <Route path="/politicas-privacidad" element={<PoliticasP />} />
        <Route path="/Terminos-condiciones" element={<TerminosC />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
};

export default App;
