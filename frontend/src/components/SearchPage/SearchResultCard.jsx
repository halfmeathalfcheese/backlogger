import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchResultCard.scss";
import categoryEnums from "../../utils/GameCategory";

const SearchResultCard = ({ result }) => {
  const navigate = useNavigate();

  const [cover, setCover] = React.useState('');
  const releaseYear = new Date(result.first_release_date).getFullYear() || 'N/A';

  useEffect(() => {
    if (!result) return;
    fetch(`http://localhost:3001/api/cover/${result._id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data === null) {
          setCover('https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg');
          return;
        };
        const url720p = data.url.replace('t_thumb', 't_720p');
        setCover(url720p);
      })
      .catch(error => console.log(error))
  }, [result]);

  return (
    <div className="game-card" id={result._id} onClick={() => navigate(`/game/${result._id}`)}>
      <div className="game-card-cover">
        <img src={cover} alt="Game cover art" />
      </div>
      <div className="game-card-info">
        <div className="game-card-main">
          <p className="game-card-name" title={result.name}>{result.name}</p>
          <p className="game-card-release-year">{releaseYear}</p>
        </div>
        <p className="game-card-category">{categoryEnums[result.category]}</p>
      </div>
    </div>
  );
}

export default SearchResultCard;