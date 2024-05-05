import React, { useEffect } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const doSearch = (searchQuery) => {
    console.log('run')
    // Fetch data from API
    fetch(`http://localhost:3001/api/search?query=${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setOptions(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      doSearch(inputValue);
    }, 750);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    console.log('options changed', options);
  }, [options]);

  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      options={options}
      getOptionLabel={(option) => option && option.name ? option.name : "not there"}
      sx={{
        width: '100%',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          placeholder="Search a game..."
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            onChange: (event) => {
              const newValue = event.target.value;
              setInputValue(newValue);
            },
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      )}
    />
  );
}

export default SearchBar;