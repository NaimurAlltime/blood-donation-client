"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Location from "@/assets/location.png";
import Image from "next/image";

const coverageAreaList = [
  {
    id: 1,
    name: "Dhaka",
    image: Location,
  },
  {
    id: 2,
    name: "Gazipur",
    image: Location,
  },
  {
    id: 3,
    name: "Rangpur",
    image: Location,
  },
  {
    id: 4,
    name: "Barishal",
    image: Location,
  },
  {
    id: 5,
    name: "Bogura",
    image: Location,
  },
  {
    id: 6,
    name: "Borguna",
    image: Location,
  },
];

const CoverageArea = () => {
  return (
    <Container>
      {/* Header section  */}
      <Box mt={12} textAlign={"center"}>
        <Typography
          component="p"
          fontSize={28}
          fontWeight={500}
          color="#1586FD"
          sx={{ mb: 2 }}
        >
          Coverage Area
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Our blood donation services cover a wide range of areas to ensure that
          life-saving blood
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          is available to those in need. We are dedicated to reaching as many
          communities as possible.
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          Below are the primary areas we serve:
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {coverageAreaList.map((area) => (
          <Grid key={area.id} item md={4} xs={6} my={1}>
            <Card>
              <Image
                width={200}
                height={180}
                src={area.image}
                alt={area.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {area.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoverageArea;
