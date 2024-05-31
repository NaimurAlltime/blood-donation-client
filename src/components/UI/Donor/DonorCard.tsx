import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Link,
} from "@mui/material";
import assets from "@/assets";
import dafult_profile from "@/assets/user_placeholder.png";
import Image from "next/image";

interface DonorCardProps {
  name: string;
  photo?: string;
  bloodType: string;
  location: string;
  availability: string;
  detailsLink: string;
}

type UserProfile = {
  profilePhoto: string;
  createdAt: string;
  id: string;
  updatedAt: string;
  userId: string;
};

export type TDonor = {
  availability: boolean;
  bloodType: string;
  createdAt: string;
  email: string;
  id: string;
  location: string;
  name: string;
  updatedAt: string;
  userProfile?: UserProfile;
};

const DonorCard = ({ donor }: { donor: TDonor }) => {
  const { name, location, bloodType, availability, id, userProfile } = donor;
  return (
    <Card sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 250, // Adjust based on your needs
          backgroundColor: "#f0f0f0", // Optional background color
        }}
      >
        {userProfile?.profilePhoto ? (
          <CardMedia
            sx={{ height: 280, objectFit: "contain" }}
            component="img"
            height="100"
            image={userProfile?.profilePhoto}
            alt={name}
          />
        ) : (
          <Image src={dafult_profile} width={200} height={150} alt={name} />
        )}
      </Box>
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
          Availability: {(availability && "Available") || "Unavailable"}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="primary">
            <Button
              component={Link}
              href={`/donor/${id}`}
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
            >
              View Details
            </Button>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonorCard;
