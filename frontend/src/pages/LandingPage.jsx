import React from 'react';
import { Button } from '@mui/material';

const LandingPage = () => {
  const handleClick = () => {
    fetch('http://localhost:3001/api/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  return (
    <div className="LandingPage">
        <h1>Landing Page</h1>
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