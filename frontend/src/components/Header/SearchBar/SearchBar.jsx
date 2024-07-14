import React, { useEffect } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import categoryEnums from '../../../utils/GameCategory'

const SearchBar = ({ initialQuery }) => {
  const [inputValue, setInputValue] = React.useState(initialQuery || '');
  const [options, setOptions] = React.useState([]);

  const navigate = useNavigate();

  const doSearch = (searchQuery) => {
    if (searchQuery === '') {
      setOptions([]);
      return;
    }
    fetch(`http://localhost:3001/api/search/${searchQuery}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => 
        setOptions(
          data.map(
            game => ({ 
              name: game.name,
              id: game._id,
              category: categoryEnums[game.category] 
            })
          )
        )
      )
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setOptions([]);
    const timeoutId = setTimeout(() => {
      doSearch(inputValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOptions([]);
    navigate(`/search/${inputValue}`, { state: { searchQuery: inputValue } });
  }

  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      options={options}
      getOptionLabel={(option) => option.name || inputValue}
      renderOption={(props, option) => ( 
        <li {...props} key={option.id}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}> 
            <span>{option.name}</span>
            <span style={{color: 'gray'}}>{option.category}</span>
          </div>
        </li> 
      )}
      sx={{
        width: '100%',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          placeholder="Find Your Games..."
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleSubmit(event);
            }
          }}
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            onChange: (event) => {
              if (event.key !== 'Enter') {
                setInputValue(event.target.value);
              }
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