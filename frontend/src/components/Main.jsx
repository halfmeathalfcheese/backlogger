import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from "../pages/LandingPage";

const Main = () => {
  return (
    <BrowserRouter>
      <div className="Main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;