import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";

// Sample data representing areas covered
const coveredAreas = [
  { name: "Area 1", donorsAvailable: true },
  { name: "Area 2", donorsAvailable: false },
  { name: "Area 3", donorsAvailable: true },
  // Add more data as needed
];

const CoverageArea = () => {
  return (
    <Box bgcolor="#f5f5f5" py={5}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Coverage Area
        </Typography>
        <Grid container spacing={3}>
          {/* Map Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: "400px" }}>
              {/* Include your map component here */}
              {/* Example: <Map /> */}
              <Box textAlign="center" pt={2}>
                <Typography variant="subtitle1">Map View</Typography>
              </Box>
            </Paper>
          </Grid>
          {/* List Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ height: "400px", overflow: "auto" }}>
              <List>
                {coveredAreas.map((area, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LocationOnIcon
                        color={area.donorsAvailable ? "primary" : "disabled"}
                      />
                    </ListItemIcon>
                    <ListItemText primary={area.name} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoverageArea;
