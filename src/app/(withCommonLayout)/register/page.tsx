"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import REForm from "@/components/Forms/REForm";
import Link from "next/link";
import REInput from "@/components/Forms/REInput";
import { FieldValues } from "react-hook-form";
import RESelectField from "@/components/Forms/RESelectField";
import { toast } from "sonner";
import { userLogin } from "@/services/actions/userLogin";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BloodType, donateBlood, roles } from "@/types";
import { storeUserInfo } from "@/services/auth.services";
import { registerUser } from "@/services/actions/registerUser";
import { dateFormatter } from "@/utils/dateFormatter";
import REDatePicker from "@/components/Forms/REDatePicker";
import assets from "@/assets";

// Validation schema for patient registration
export const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email!"),
  location: z.string().min(1, "Please enter your location!"),
  password: z.string().min(6, "Must be at least 6 characters!"),
  bloodType: z.string().min(1, "Please select a blood group!"),
  donateOption: z.string().min(1, "Please select an option!"),
  age: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Please enter your age!")
  ),
  role: z.string().min(1, "Please select a role!"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bloodType: "",
  donateOption: "",
  location: "",
  age: 0,
  profilePhoto: "",
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const registerUserData = {
      name: values?.name,
      email: values?.email,
      password: values?.password,
      bloodType: values?.bloodType,
      location: values?.location,
      role: values?.role,
      lastDonationDate: dateFormatter(values?.lastDonationDate),
      age: Number(values?.age),
      profilePhoto: values?.profilePhoto || "",
    };

    // console.log({ registerUserData });

    try {
      const res = await registerUser(registerUserData);
      console.log(res);

      // Register user direct login functionality
      if (res?.data?.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ token: result?.data?.token });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box>
              <Image
                src={assets.images.logo}
                alt="logo"
                width={100}
                height={90}
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Register Form
              </Typography>
            </Box>
          </Stack>

          <Box>
            <REForm
              onSubmit={handleRegister}
              resolver={zodResolver(ValidationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <REInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <REInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <REInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <REInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <RESelectField
                    items={donateBlood}
                    name="donateOption"
                    label="Want to donate blood?"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <RESelectField
                    items={BloodType}
                    name="bloodType"
                    label="Blood Group"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <REDatePicker
                    name="lastDonationDate"
                    label="Last Donation Date"
                    sx={{ mt: 0.5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <REInput
                    label="Age"
                    fullWidth={true}
                    name="age"
                    sx={{ mt: 0.5 }}
                    type="number"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <REInput
                    label="Profile Photo URL"
                    fullWidth={true}
                    name="profilePhoto"
                    type="string"
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <Link href="/login">
                  <Box component="span" color="primary.main">
                    Login Now
                  </Box>
                </Link>
              </Typography>
            </REForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
