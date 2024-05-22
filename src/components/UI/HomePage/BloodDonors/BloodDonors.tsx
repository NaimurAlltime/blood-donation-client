"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Box,
  Button,
  Paper,
  Collapse,
  Stack,
  InputAdornment,
} from "@mui/material";
import DonorCard from "./components/DonorCard";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

interface Donor {
  name: string;
  photo?: string;
  bloodType: string;
  location: string;
  availability: string;
  detailsLink: string;
}

const donors: Donor[] = [
  {
    name: "John Doe",
    bloodType: "A+",
    location: "New York, NY",
    availability: "Available",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    bloodType: "O-",
    location: "Los Angeles, CA",
    availability: "Unavailable",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    bloodType: "O-",
    location: "Los Angeles, CA",
    availability: "Unavailable",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    bloodType: "O-",
    location: "Los Angeles, CA",
    availability: "Unavailable",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    bloodType: "B+",
    location: "Los Angeles, CA",
    availability: "Unavailable",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    bloodType: "B+",
    location: "Los Angeles, CA",
    availability: "Unavailable",
    detailsLink: "#",
    photo: "https://via.placeholder.com/150",
  },
];

const BloodDonors: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    bloodType: "",
    location: "",
    availability: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchFilters({ ...searchFilters, [name]: value });
  };

  const [filtersVisible, setFiltersVisible] = useState(false);

  const filteredDonors = donors.filter(
    (donor) =>
      (!searchFilters.bloodType ||
        donor.bloodType === searchFilters.bloodType) &&
      (!searchFilters.location ||
        donor.location
          .toLowerCase()
          .includes(searchFilters.location.toLowerCase())) &&
      (!searchFilters.availability ||
        donor.availability === searchFilters.availability)
  );

  const toggleFilters = () => {
    setFiltersVisible((prevVisible) => !prevVisible);
  };

  return (
    <Container
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 4,
        borderRadius: 2,
        // boxShadow: 3,
      }}
    >
      <Box my={4}>
        <Box textAlign={"center"}>
          <Typography
            component="p"
            fontSize={28}
            fontWeight={500}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            Search Blood Donors
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mb: 2 }}
          >
            This section allows users to search and filter for blood donors by
            name, blood type, location, and availability status.
            <br />
            Easily find the most suitable donors using the search field and
            filters provided.
          </Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          my={2}
        >
          {/* <TextField size="small" placeholder="Search Blood Donors" /> */}
          <TextField
            size="small"
            placeholder="Search Blood Donors"
            name="name"
            // value={searchFilters.name}
            onChange={handleFilterChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageSearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box mb={2} textAlign="center">
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
                  value={searchFilters.bloodType}
                  onChange={handleFilterChange}
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                  <MenuItem value="B-">B-</MenuItem>
                  <MenuItem value="O+">O+</MenuItem>
                  <MenuItem value="O-">O-</MenuItem>
                  <MenuItem value="AB+">AB+</MenuItem>
                  <MenuItem value="AB-">AB-</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Location"
                  name="location"
                  size="small"
                  value={searchFilters.location}
                  onChange={handleFilterChange}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Availability"
                  name="availability"
                  size="small"
                  value={searchFilters.availability}
                  onChange={handleFilterChange}
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Available">Available</MenuItem>
                  <MenuItem value="Unavailable">Unavailable</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </Collapse>
        <Grid container spacing={4} mt={1}>
          {filteredDonors.slice(0, 10).map((donor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DonorCard {...donor} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BloodDonors;
