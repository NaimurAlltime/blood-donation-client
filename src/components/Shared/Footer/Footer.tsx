import React from "react";
import { Box, Container, Stack, Typography, Grid, Link as MuiLink } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link";
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import Image from "next/image";
import assets from "@/assets";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Footer = () => {
  const whiteColor = '#FFFFFF'; // Define the white color code

  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Grid container spacing={12} justifyContent="center">
          {/* Logo Section */}
          <Grid item xs={12} md={3}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <Typography
                variant="h4"
                component={Link}
                href="/"
                fontWeight={600}
                color={whiteColor} // Use the white color code
                align="left"
              >
                <Box>
                <Image
                    src={assets.images.logo_white}
                    width={200}
                    height={60}
                    alt="logo"
                  />
                </Box>
                <Typography color={whiteColor} mt={2}>
                Donate blood to save lives and make a vital impact on those in need.
                </Typography>
              </Typography>
            </Stack>
          </Grid>

          {/* Important Links Section */}
          <Grid item xs={12} md={3}>
            <Stack direction="column" spacing={1} alignItems="start">
              <Typography variant="h6" color={whiteColor}>Quick Links
              </Typography>
              <MuiLink href="/" color={whiteColor} underline="none"><ArrowRightIcon /> Home</MuiLink>
              <MuiLink href="/donnr" color={whiteColor} underline="none"><ArrowRightIcon />Donor</MuiLink>  
              <MuiLink href="/about" color={whiteColor} underline="none"><ArrowRightIcon />About Us</MuiLink>
            </Stack>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={3}>
            <Stack direction="column" spacing={1} alignItems="start">
              <Typography variant="h6" color={whiteColor}>Contact Us</Typography>
              <Typography color={whiteColor}><MailOutlineIcon /> naimur2231@gmail.com</Typography>
              <Typography color={whiteColor}><AddIcCallIcon /> +8801983835309</Typography>
              <Typography color={whiteColor}><AddLocationAltIcon /> Dhaka, Bangladesh</Typography>
            </Stack>
          </Grid>
          {/* Privacy & You Section */}
          <Grid item xs={12} md={3}>
            <Stack direction="column" spacing={1} alignItems="start">
              <Typography variant="h6" color={whiteColor}>Privacy & You</Typography>
              <MuiLink href="/" color={whiteColor} underline="none"><ArrowRightIcon />Terms of Use</MuiLink>
              <MuiLink href="/about" color={whiteColor} underline="none"><ArrowRightIcon />Privacy Policy</MuiLink>
              <MuiLink href="/services" color={whiteColor} underline="none"><ArrowRightIcon />Be Safe Online</MuiLink>
              
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
          <Typography component="p" color={whiteColor}>
            &copy;2024 Blood Donation. All Rights Reserved.
          </Typography>
                    {/* Social Media Section */}
                    <Grid item xs={12} md={3}>
            <Stack direction="row" gap={2} justifyContent="center">
            <MuiLink href="https://github.com/NaimurAlltime" color={whiteColor} target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="medium" />
              </MuiLink>
              <MuiLink href="https://web.facebook.com/naimur22315" color={whiteColor} target="_blank" rel="noopener noreferrer">
                <Facebook fontSize="medium" />
              </MuiLink>
              <MuiLink href="https://x.com/naimur22315" color={whiteColor} target="_blank" rel="noopener noreferrer">
                <Twitter fontSize="medium" />
              </MuiLink>
              <MuiLink href="https://www.linkedin.com/in/naimur22315/" color={whiteColor} target="_blank" rel="noopener noreferrer">
                <LinkedIn fontSize="medium" />
              </MuiLink>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
