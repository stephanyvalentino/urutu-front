import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Podcast from "./pages/Podcast";
import Contato from "./pages/Contato";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
