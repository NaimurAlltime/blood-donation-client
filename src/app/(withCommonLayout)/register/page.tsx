"use client";

import assets from "@/assets";
import REDatePicker from "@/components/Forms/REDatePicker";
import REFileUploader from "@/components/Forms/REFileUploader";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import RESelectField from "@/components/Forms/RESelectField";
import { config } from "@/config";
import { BloodType } from "@/contants";
import { registerUser } from "@/services/actions/registerUser";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import dateFormatter from "@/utils/dateFormatter";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema for patient registration
export const ValidationSchema = z.object({
  name: z.string().min(1, "Please enter your name!"),
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email!"),
  location: z.string().min(1, "Please enter your location!"),
  password: z.string().min(6, "Must be at least 6 characters!"),
  bloodType: z.string().min(1, "Please select a blood group!"),
  age: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Please enter your age!")
  ),
  lastDonationDate: z.date({ message: "Provide a valid  last Donation Date" }),
});

const RegisterPage = () => {
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  const router = useRouter();

  const defaultValues = {
    name: "",
    email: "",
    username: "",
    bloodType: "",
    location: "",
    password: "",
    age: "",
    lastDonationDate: "",
    profilePhoto: "",
  };

  const handleRegister = async (values: any) => {
    const registerUserData = {
      name: values?.name,
      username: values?.username,
      email: values?.email,
      bloodType: values?.bloodType,
      location: values?.location,
      password: values?.password,
      age: Number(values?.age),
      lastDonationDate: dateFormatter.dateToString(values?.lastDonationDate),
      profilePhoto: imageUrl || "",
    };

    try {
      const res = await registerUser(registerUserData);
      // console.log("Register response:", res);

      // Register user direct login functionality
      if (res?.data?.id) {
        toast.success("User registered successfully!");
        const result = await userLogin({
          password: values.password,
          usernameOrEmail: values.email,
        });
        if (result?.data?.token) {
          storeUserInfo({ token: result?.data?.token });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      toast.error("Failed to register user");
      // console.error("Registration error:", err);
    }
  };

  const handleFileUpload = async (image: any) => {
    const toastId = toast.loading("Uploading Image...");
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", config.cloudinaryUploadPreset as string);
    data.append("cloud_name", config.cloudinaryCloudName as string);
    data.append("folder", "blood-donation");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${config.cloudinaryCloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();

      if (res.secure_url) {
        setImageUrl(res.secure_url);
        toast.success("Image Upload Successfully!", { id: toastId });
      } else {
        toast.error("Failed to Upload Image", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to Upload Image", { id: toastId });
    }
  };

  return (
    <Stack py={10}>
      <Container maxWidth="md">
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Box>
            <Image
              src={assets.images.logo}
              alt="logo"
              width={110}
              height={92}
            />
          </Box>
          <Box>
            <Typography variant="h6" mt={0.5} fontWeight={600}>
              Register Form
            </Typography>
          </Box>
        </Stack>
        <REForm
          onSubmit={handleRegister}
          resolver={zodResolver(ValidationSchema)}
          defaultValues={defaultValues}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <REInput name="name" label="Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="username" label="Username" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="email" label="Email" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <REInput
                label="Password"
                type="password"
                fullWidth={true}
                name="password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RESelectField
                items={BloodType}
                name="bloodType"
                label="Blood Group"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="location" label="Location" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="age" label="Age" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REDatePicker
                name="lastDonationDate"
                label="Last Donation Date"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <REFileUploader
                name="file"
                onFileUpload={handleFileUpload}
                label="Upload Profile Photo"
              />
            </Grid>
          </Grid>
          <Typography component="p" fontWeight={300} mt={1}>
            Do you already have an account?{" "}
            <Link href="/login">
              <Box component="span" color="primary.main">
                Login Now
              </Box>
            </Link>
          </Typography>
          <Stack justifyContent="center" my={4}>
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </Stack>
        </REForm>
      </Container>
    </Stack>
  );
};

export default RegisterPage;
