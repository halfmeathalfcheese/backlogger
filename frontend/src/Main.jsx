import React from "react";
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import RegisterPage from "./pages/LoginRegister/LoginRegisterPage";
import GamePage from "./pages/GamePage";

const Main = () => {
  return (
      <div className="Main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </div>
  );
}

export default Main;