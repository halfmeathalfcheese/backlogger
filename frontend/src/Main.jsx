import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="Main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;