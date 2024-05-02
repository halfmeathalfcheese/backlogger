import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      options={[]}
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
            )
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