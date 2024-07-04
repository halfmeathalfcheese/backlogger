import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Page.scss';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search/Fallout New Vegas');
  }
  return (
    <div className="standard-page-body">
        <h1>Welcome. Start tracking your games today...</h1>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleClick}
        >
          Search Fallout New Vegas
        </Button>
    </div>
  );
}

export default LandingPage;