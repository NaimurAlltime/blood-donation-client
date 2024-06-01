"use client";

import assets from "@/assets";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar: React.FC = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Grid container py={2} alignItems="center">
        <Grid item xs={6} md={4} lg={3}>
          <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Image
              src={assets.images.logo}
              width={180}
              height={130}
              alt="logo"
            />
          </Box>
        </Grid>

        {isMobile ? (
          <Grid item xs={6} md={8} lg={9} sx={{ textAlign: "right" }}>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} href="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem
                component={Link}
                href="/donor"
                onClick={handleMenuClose}
              >
                Donor
              </MenuItem>
              <MenuItem
                component={Link}
                href="/about-us"
                onClick={handleMenuClose}
              >
                About Us
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <AuthButton />
              </MenuItem>
            </Menu>
          </Grid>
        ) : (
          <Grid
            item
            container
            xs={6}
            md={8}
            lg={9}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  component={Link}
                  href="/"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Typography>
                <Typography
                  component={Link}
                  href="/donor"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Donor
                </Typography>
                <Typography
                  component={Link}
                  href="/about-us"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  About Us
                </Typography>
                <Typography
                  component={Link}
                  href="/profile"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  My Profile
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <AuthButton />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Navbar;
