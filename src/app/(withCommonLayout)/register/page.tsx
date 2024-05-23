"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import REDatePicker from "@/components/Forms/REDatePicker";
import RESelectField from "@/components/Forms/RESelectField";
import { BloodType, donateBlood } from "@/types";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  email: z.string().email("Please enter a valid email address!"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please provide a valid phone number!"),
  address: z.string().min(1, "Please enter your address!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ token: result?.data?.token });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src={assets.images.logo}
                width={120}
                height={120}
                alt="logo"
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
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <REInput label="Username" fullWidth={true} name="username" />
                </Grid>
                <Grid item md={6}>
                  <REInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <REInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <RESelectField
                    items={BloodType}
                    name="bloodType"
                    label="Blood Type"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item md={6}>
                  <REInput label="Location" fullWidth={true} name="location" />
                </Grid>
                <Grid item md={6}>
                  <REInput
                    label="Age"
                    type="number"
                    fullWidth={true}
                    name="age"
                  />
                </Grid>
                <Grid item md={6}>
                  <REDatePicker
                    name="lastDonationDate"
                    label="last Donation Date"
                  />
                </Grid>
                <Grid item md={6}>
                  <RESelectField
                    items={donateBlood}
                    name="donateBlood"
                    label="Donate Blood"
                    sx={{ mb: 2 }}
                    fullWidth
                  />
                </Grid>
                <Grid item md={12}>
                  <REInput
                    label="Bio"
                    fullWidth={true}
                    name="bio"
                    // multiline
                    // rows={4}
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
                <Link href="/login" className="text-blue-500">
                  <Box component="span" color="primary.main">
                    Login
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
