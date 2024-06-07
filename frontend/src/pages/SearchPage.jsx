import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SearchPage.scss";
import SearchResultCard from "../components/SearchPage/SearchResultCard";

const SearchPage = () => {
  const { query } = useParams();
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    if (!query) return;
    console.log('query changed: ', query)
    fetch(`http://localhost:3001/api/search/${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error))
  }, [query]);

  return (
    <div className="search-results">
      <div className="results-title">
        <h2>Results for: {query} </h2>
      </div>
      <div className="results-container">
        {results.map((result, index) => (
          <SearchResultCard key={index} result={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;