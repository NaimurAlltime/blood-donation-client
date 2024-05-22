import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 12,
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Life Drops:
        </Typography>
        <Typography variant="h2" component="h1" fontWeight={600}>
          Donate Blood,
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Save Lives!
        </Typography>
        <Typography sx={{ my: 4 }}>
          Be a lifesaver! Join our blood donation community, where every drop
          counts towards saving lives. Together, let's make a difference and
          ensure a healthier future for all. Donate today, save lives tomorrow!
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Search Donors</Button>
          <Button variant="outlined">About Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.svgs.Blood_donation}
            width={580}
            height={580}
            alt="Blood donar"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
