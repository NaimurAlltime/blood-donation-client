import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import assets from "@/assets";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              pt={3}
            >
              <Typography
                variant="h4"
                component={Link}
                href="/"
                fontWeight={600}
                color="white"
              >
                <Box>
                  <Image
                    src={assets.images.logo_white}
                    width={240}
                    height={350}
                    alt="logo"
                  />
                </Box>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="row" gap={2} justifyContent="center" py={3}>
              <Image src={facebookIcon} width={30} height={30} alt="facebook" />
              <Image
                src={instagramIcon}
                width={30}
                height={30}
                alt="instagram"
              />
              <Image src={twitterIcon} width={30} height={30} alt="twitter" />
              <Image src={linkedIcon} width={30} height={30} alt="linkedin" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack direction="column" gap={2} alignItems="center">
              <Typography color="#fff" component={Link} href="/consultation">
                Contact Us
              </Typography>
              <Typography color="#fff">bloodbank62@gmail.com</Typography>
              <Typography color="#fff">01953538308</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={3} sx={{ border: "1px dashed lightgray" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          mt={1}
        >
          <Typography component="p" color="white">
            &copy;2024 Blood Donation. All Rights Reserved.
          </Typography>
          <Typography component="p" color="white">
            Terms of Use | Privacy Policy
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
