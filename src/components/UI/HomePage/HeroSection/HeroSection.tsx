import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container sx={{ my: 14 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box>
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
              Be a lifesaver! Join our blood donation community, where every
              drop counts towards saving lives. Together, let is make a
              difference and ensure a healthier future for all. Donate today,
              save lives tomorrow!
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button LinkComponent={Link} href="/donor" variant="contained">
                Search Donors
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: "center", order: { xs: 1, md: 2 } }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={assets.svgs.Blood_donation}
              width={580}
              height={580}
              alt="Blood donor"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
