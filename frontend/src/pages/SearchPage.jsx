import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SearchPage.scss";
import SearchResultCard from "../components/SearchPage/SearchResultCard";

const SearchPage = () => {
  const { query } = useParams();

  const results = [
    { name: "Game 1", category: 0 },
    { name: "Game 2", category: 1 },
    { name: "Game 3", category: 2 },
    { name: "Game 4", category: 0 },
    { name: "Game 5", category: 1 },
    { name: "Game 6", category: 2 },
  ]

  return (
    <div className="search-results">
      <div className="results-title">
        <h2>Results for: {query} </h2>
      </div>
      <div className="results-container">
        {/* Display search results here */}
        {results.map((result, index) => (
          <SearchResultCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;