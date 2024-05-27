/* eslint-disable react-hooks/exhaustive-deps */
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { InputAdornment, TextField } from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";

interface DebouncedSearchProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const DebouncedSearch: React.FC<DebouncedSearchProps> = ({
  onSearch,
  placeholder = "Search",
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <TextField
      size="small"
      value={searchTerm}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      style={{ width: "50%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <ManageSearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DebouncedSearch;
