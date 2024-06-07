"use client";

import assets from "@/assets";
import {
  Box,
  Button,
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
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import AccountMenu from "@/components/Dashboard/AccountMenu/AccountMenu";
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import { logout } from "@/services/actions/logout";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<{ id: string } | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const user = await getUserInfo();
      setUserInfo(user);
      router.refresh();
    };

    fetchUserInfo();
  }, []);

  console.log("L", userInfo);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    removeUser();
    await logout();
    setUserInfo(null);
    router.refresh();
  };

  return (
    <div style={{ background: "" }}>
      <Container>
        <Grid sx={{}} container py={2} alignItems="center">
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
                {userInfo && (
                  <MenuItem
                    component={Link}
                    href="//dashboard/profile"
                    onClick={handleMenuClose}
                  >
                    My Profile
                  </MenuItem>
                )}
                <MenuItem onClick={handleMenuClose}>
                  {/* <AuthButton /> */}
                  <>
                    {userInfo ? (
                      // <Button color="error" onClick={handleLogOut}>
                      //   Logout
                      // </Button>
                      <AccountMenu color="primary.main" />
                    ) : (
                      <Button component={Link} href="/login">
                        Login
                      </Button>
                    )}
                  </>
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
                  {userInfo && (
                    <Typography
                      component={Link}
                      href="/dashboard/profile"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      My Profile
                    </Typography>
                  )}
                </Stack>
              </Grid>
              <Grid item>
                {/* <AuthButton /> */}
                <>
                  {userInfo ? (
                    <Button color="error" onClick={handleLogOut}>
                      Logout
                    </Button>
                  ) : (
                    <Button component={Link} href="/login">
                      Login
                    </Button>
                  )}
                </>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
