"use client";
import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          <Box>
            <Image
              src={assets.images.logo}
              width={240}
              height={350}
              alt="logo"
            />
          </Box>
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography>About Us</Typography>
          <Typography>My Profile</Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
