import React from "react";
import { Button } from "@mui/material";

import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>BackLogger</h1>
      </div>
      <div className="middle">
        <SearchBar />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Header;