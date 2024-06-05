import React from "react";

import "./SearchResultCard.scss";
import categoryEnums from "../../utils/GameCategory";

const SearchResultCard = ({ result }) => {
  return (
    <div className="card">
      <div>
        <img src="https://via.placeholder.com/250" alt="Game" />
      </div>
      <h2>{result.name}</h2>
      <p>{categoryEnums[result.category]}</p>
    </div>
  );
}

export default SearchResultCard;