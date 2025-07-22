import React, { useEffect, useState } from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import categoryEnums from "../../../utils/GameCategory";

const SearchBar = ({ initialQuery }) => {
  const [inputValue, setInputValue] = useState(initialQuery || "");
  const [options, setOptions] = useState([]);

  const navigate = useNavigate();

  const doSearch = (searchQuery) => {
    if (!searchQuery) {
      setOptions([]);
      return;
    }

    fetch(`http://localhost:3001/api/search/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setOptions(
          data.map((game) => ({
            label: game.name,
            id: game._id,
            category: categoryEnums[game.category],
          }))
        );
      })
      .catch(console.error);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      doSearch(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleSelect = (value) => {
    if (!value) return;

    console.log("handleSelect called with value:", value);
    if (value.id) {
      // selected from dropdown
      console.log("Clicked game: Selected game:", value);
      navigate(`/game/${value.id}`);
    } else if (typeof value === "string") {
      // typed manually + pressed enter
      console.log("typed: Searching for:", value);
      navigate(`/search/${value}`);
    }
  };

  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      options={options}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, value) => {
        handleSelect(value);
      }}
      getOptionLabel={(option) => option.label || option || ""}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>{option.label}</span>
            <span style={{ color: "gray" }}>{option.category}</span>
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          margin="normal"
          placeholder="Find Your Games..."
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              handleSelect(inputValue);
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
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      )}
      sx={{ width: "100%" }}
    />
  );
};

export default SearchBar;
