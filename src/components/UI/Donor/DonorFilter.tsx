"use client";

import DebouncedSearch from "@/utils/Debounce";
import {
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import {
  availabilityType,
  bloodType,
  districtsOfBangladesh,
} from "@/contants/donorConst";
import React from "react";

interface DonorFilterProps {
  defaultValues: {
    bloodType: string;
    availability: string;
    location: string;
    searchTerm: string;
  };
  setDefaultValues: React.Dispatch<
    React.SetStateAction<{
      bloodType: string;
      availability: string;
      location: string;
      searchTerm: string;
    }>
  >;
}

const DonorFilter: React.FC<DonorFilterProps> = ({
  defaultValues,
  setDefaultValues,
}) => {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleFilterChange = (event: any) => {
    const { name, value } = event.target;
    setDefaultValues({
      ...defaultValues,
      [name]: value,
    });
  };

  const handleSearch = (query: any) => {
    setDefaultValues({
      ...defaultValues,
      searchTerm: query,
    });
  };

  const toggleFilters = () => {
    setFiltersVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        my={2}
        spacing={2}
      >
        <DebouncedSearch
          placeholder="Search Blood Donors name or location"
          onSearch={handleSearch}
        />
        <Box mb={{ xs: 2, md: 0 }} textAlign="center">
          <Button variant="contained" color="primary" onClick={toggleFilters}>
            {filtersVisible ? "Hide Filters" : "Open Filters"}
          </Button>
        </Box>
      </Stack>
      <Collapse in={filtersVisible}>
        <Box
          mb={4}
          component={Paper}
          elevation={3}
          sx={{ padding: 2, borderRadius: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Blood Type"
                name="bloodType"
                size="small"
                value={defaultValues.bloodType}
                onChange={handleFilterChange}
                fullWidth
                variant="outlined"
              >
                {bloodType.map((type) => (
                  <MenuItem key={type.id} value={type.value}>
                    {type.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Location"
                name="location"
                size="small"
                value={defaultValues.location}
                onChange={handleFilterChange}
                fullWidth
                variant="outlined"
              >
                {districtsOfBangladesh.map((type) => (
                  <MenuItem key={type.id} value={type.value}>
                    {type.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Availability"
                name="availability"
                size="small"
                value={defaultValues.availability}
                onChange={handleFilterChange}
                fullWidth
                variant="outlined"
              >
                {availabilityType.map((availability) => (
                  <MenuItem key={availability.id} value={availability.value}>
                    {availability.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </Collapse>
    </>
  );
};

export default DonorFilter;
