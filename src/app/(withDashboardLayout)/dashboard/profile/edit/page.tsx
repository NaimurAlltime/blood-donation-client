"use client";

import REDatePicker from "@/components/Forms/REDatePicker";
import REFileUploader from "@/components/Forms/REFileUploader";
import REForm from "@/components/Forms/REForm";
import REInput from "@/components/Forms/REInput";
import RESelectField from "@/components/Forms/RESelectField";
import Loader from "@/components/UI/Loader";
import { config } from "@/config";
import { Availability, BloodType } from "@/contants";
import {
  useGetSingleUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/authApi";
import dateFormatter from "@/utils/dateFormatter";
import { Button, Container, Grid, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const UpdateProfilePage = () => {
  const [updateMyProfile, { isLoading: isUpdating }] =
    useUpdateMyProfileMutation();
  const { data, isLoading } = useGetSingleUserQuery({});
  const [imageUrl, setImageUrl] = useState<null | string>(null);
  const router = useRouter();
  // console.log("edit", data?.userProfile?.age);

  if (isLoading) return <Loader />;

  const defaultValues = {
    name: data?.name,
    email: data?.email,
    username: data?.username,
    bloodType: data?.bloodType,
    location: data?.location,
    availability: data?.availability,
    age: data?.userProfile?.age,
    lastDonationDate: data?.userProfile?.lastDonationDate,
    profilePhoto: data?.userProfile?.profilePhoto,
  };

  const handleUpdateProfile = async (values: any) => {
    const updateData = {
      name: values?.name,
      username: values?.username,
      email: values?.email,
      bloodType: values?.bloodType,
      location: values?.location,
      availability: values.availability,
      userProfile: {
        lastDonationDate: dateFormatter.dateToString(values?.lastDonationDate),
        age: Number(values?.age),
        profilePhoto: imageUrl || data?.userProfile?.profilePhoto,
      },
    };

    try {
      const res = await updateMyProfile({ updateData }).unwrap();
      if (res) {
        router.push("/dashboard/profile");
        toast.success("Profile Updated Successfully!");
      }
    } catch (error: any) {
      toast.error(error.message);
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
        toast.success("Image Uploaded Successfully!", {
          id: toastId,
        });
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
        <REForm onSubmit={handleUpdateProfile} defaultValues={defaultValues}>
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
              <RESelectField
                items={Availability}
                name="availability"
                label="Availability"
                sx={{ mt: 0.5 }}
              />
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
                label="Change Profile Photo"
              />
            </Grid>
          </Grid>
          <Stack justifyContent="center" my={4}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Update Profile"}
            </Button>
          </Stack>
        </REForm>
      </Container>
    </Stack>
  );
};

export default UpdateProfilePage;
