import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Inicio from "./pages/inicio";
import Listagem from "./pages/Listagem";
import Information from "./pages/Information";

const App = () => {
  const [color] = useState("#eb8d04");
  document.body.style.backgroundColor = color;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/listagem" element={<Listagem />} />
      <Route path="/information/:id" element={<Information />} />
    </Routes>
  );
};

export default App;
