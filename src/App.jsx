import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./screen/Inicio";
import AcercaDe from "./screen/Acercade";
import Navbar from "./screen/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
};

export default App;
