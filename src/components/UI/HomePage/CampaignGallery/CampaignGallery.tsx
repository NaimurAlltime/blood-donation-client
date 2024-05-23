import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const CampaignGallery: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign={"center"}>
        <Typography
          component="p"
          fontSize={28}
          fontWeight={500}
          color="#1586FD"
          sx={{ mb: 0.4 }}
        >
          Campaign Gallery
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mb: 1 }}>
          Our prestigious voluntary work on campaigns by the team
        </Typography>
      </Box>
      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_1}
              alt="Campaign Image 1"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_2}
              alt="Campaign Image 2"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_3}
              alt="Campaign Image 3"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_4}
              alt="Campaign Image 4"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_5}
              alt="Campaign Image 5"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingBottom: "100%",
              overflow: "hidden",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "red",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.1)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={assets.images.gallery_6}
              alt="Campaign Image 6"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CampaignGallery;
