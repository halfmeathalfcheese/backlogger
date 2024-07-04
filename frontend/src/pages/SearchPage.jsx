import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SearchPage.scss";
import "./Page.scss";
import SearchResultCard from "../components/SearchPage/SearchResultCard";

const SearchPage = () => {
  const { query } = useParams();
  const [allResults, setAllResults] = React.useState([]);

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
      .then(data => setAllResults(data))
      .catch(error => console.log(error))
  }, [query]);

  return (
    <div className="standard-page-body">
      <div className="search-results">
        <div className="results-title">
          <h2>Results for: {query} </h2>
        </div>
        <div className="results-container">
          {allResults.map((result, index) => (
            <SearchResultCard key={index} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;