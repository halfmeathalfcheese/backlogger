import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import LoadingElement from "../../components/LoadingElement/LoadingElement";
import { Typography } from "@mui/material";

const GamePage = () => {
  const { id } = useParams();

  const [gameData, setGameData] = React.useState(null);
  const [coverData, setCoverData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/game/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameData(data);
      console.log(data);
      setIsLoading(false);
      return fetch(`http://localhost:3001/api/cover/${data._id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data === null) {
          setCoverData('https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg');
          return;
        }
        const url720p = data.url.replace('t_thumb', 't_720p');
        setCoverData({ url: url720p });
      })
    })
    .catch(error => console.error(error));
  }
  , [id]);

  if (isLoading) {
    return (
      <LoadingElement />
    );
  }

  return (
    <div className="standard-page-body">
        <div className="game-page">
          <Typography
            variant="h4"
          > 
            {gameData.name}
          </Typography>
          {coverData && <img src={coverData.url} alt="Game cover art" />}
          <p>Release Date: {new Date(gameData.first_release_date).toLocaleDateString()}</p>
          <p>Category: {gameData.genres.join(', ')}</p>
          <p>Platforms: {gameData.platforms.join(', ')}</p>
          <p>Summary: {gameData.summary}</p>
          <p>Storyline: {gameData.storyline}</p>
        </div>
    </div>
  );
}

export default GamePage;