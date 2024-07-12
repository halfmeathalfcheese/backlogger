import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { useLocation } from 'react-router-dom';

import appLogo from "../../images/app-logo-invert.png";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || '';

  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-left">
        <Button
          onClick={() => navigate('/')}
          style={{ cursor: "pointer" }}
        >
          <img src={appLogo} alt="App logo" />
        </Button>
      </div>
      <div className="header-middle">
        <SearchBar initialQuery={searchQuery} />
      </div>
      <div className="header-right">
        <div id="header-login-button">
          <Typography
            variant="h6"
            fontWeight={600}
            color="primary"
            className="hover-enlarge"
            onClick={() => navigate('/login')}
            style={{ 
              cursor: "pointer",
              padding: "5px 15px",
              border: "1px solid white",
              borderRadius: "20px",
              color: "white"
            }}
          >
            Login
          </Typography>
        </div>
        <div id="header-register-button">
          <Typography
            variant="h6"
            fontWeight={600}
            color="primary"
            onClick={() => navigate('/register')}
            className="hover-enlarge"
            id="header-register-text"
            style={{ 
              cursor: "pointer",
              color: "#141414",
              padding: "5px 15px",
              border: "1px solid white",
              borderRadius: "20px",
              backgroundColor: "white"
            }}
          >
            Get Started
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Header;