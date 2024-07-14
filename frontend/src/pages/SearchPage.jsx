import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import "./SearchPage.scss";
import "./Page.scss";
import SearchResultCard from "../components/SearchPage/SearchResultCard";

const SearchPage = () => {
  const { query } = useParams();
  const [allResults, setAllResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

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
      .finally(() => setIsLoading(false));
  }, [query]);

  if (isLoading) {
    return (
      <div>
        <Typography>Loading...</Typography>
      </div>
    );
  }

  return (
    <div className="standard-page-body">
      <div className="search-results">
        <div className="results-title">
          <Typography variant="h5" 
          style={{
            marginBottom: '20px',
          }}>
            Results for: {query} 
          </Typography>
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