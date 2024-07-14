import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const GamePage = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/games/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }
  , [id]);

  return (
    <div className="GamePage">
      <h1>GamePage</h1>
    </div>
  );
}

export default GamePage;