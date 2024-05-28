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
  console.log("edit", data);

  if (isLoading) return <Loader />;

  const defaultValues = {
    user: {
      name: data?.name,
      email: data?.email,
      username: data?.username,
      bloodType: data?.bloodType,
      location: data?.location,
      availability: String(data?.availability),
    },
    userProfile: {
      bio: data?.userProfile?.bio || "",
      dateOfBirth: data?.userProfile?.dateOfBirth,
      lastDonationDate: data?.userProfile?.lastDonationDate,
      profilePicture: "",
    },
  };

  const handleUpdateProfile = async (values: any) => {
    if (imageUrl) {
      values.userProfile.profilePicture = imageUrl;
    }
    values.userProfile.dateOfBirth = dateFormatter.dateToString(
      values.userProfile.dateOfBirth
    );
    values.userProfile.lastDonationDate = dateFormatter.dateToString(
      values.userProfile.lastDonationDate
    );
    values.userProfile.id = data.userProfile.id;
    values.user.availability = values.user.availability === "true";
    values.userProfile.bio = values.userProfile.bio;

    try {
      const res = await updateMyProfile({
        id: data.id,
        payload: values,
      }).unwrap();
      if (res.success) {
        router.push("/profile");
        toast.success("Profile Updated Successfully!");
      }
    } catch (error) {
      toast.error("Failed to Update Profile");
    }
  };

  const handleFileUpload = async (image: any) => {
    const toastId = toast.loading("Uploading Image...");
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", config.cloudinaryUploadPreset as string);
    data.append("cloud_name", config.cloudinaryCloudName as string);
    data.append("folder", "blood-aid-network");

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
        toast.success("Image Uploaded Successfully, now save update!", {
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
              <REInput name="user.name" label="Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="user.email" label="Email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="user.username" label="Username" />
            </Grid>
            <Grid item xs={12} md={6}>
              <RESelectField
                items={BloodType}
                name="user.bloodType"
                label="Blood Group"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="user.location" label="Location" />
            </Grid>
            <Grid item xs={12} md={6}>
              <RESelectField
                items={Availability}
                name="user.availability"
                label="Availability"
                sx={{ mt: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <REInput name="userProfile.bio" label="Bio" />
            </Grid>
            <Grid item xs={12} md={6}>
              <REDatePicker
                name="userProfile.dateOfBirth"
                label="Date of Birth"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <REDatePicker
                name="userProfile.lastDonationDate"
                label="Last Donation Date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
