import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';

import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-left">
        <Typography
          variant="h4"
          fontWeight={600}
          color="primary"
          onClick={() => navigate('/')}
          style={{ cursor: "pointer" }}
        >
            BackLogger
        </Typography>
      </div>
      <div className="header-middle">
        <SearchBar initialQuery={searchQuery} />
      </div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;