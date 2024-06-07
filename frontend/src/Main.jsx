import React from "react";
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";

const Main = () => {
  return (
      <div className="Main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </div>
  );
}

export default Main;