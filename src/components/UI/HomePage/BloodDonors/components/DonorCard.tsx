import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

interface DonorCardProps {
  name: string;
  photo?: string;
  bloodType: string;
  location: string;
  availability: string;
  detailsLink: string;
}

const DonorCard: React.FC<DonorCardProps> = ({
  name,
  photo,
  bloodType,
  location,
  availability,
  detailsLink,
}) => {
  return (
    <Card sx={{ height: "100%" }}>
      {photo && (
        <CardMedia
          sx={{ height: 280 }}
          component="img"
          height="100"
          image={photo}
          alt={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Blood Type: {bloodType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {availability}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="primary">
            <a href={detailsLink} target="_blank" rel="noopener noreferrer">
              View Details
            </a>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonorCard;
