"use client";

import defaultProfile from "@/assets/image/user_placeholder.png";
import Loader from "@/components/UI/Loader";
import { useGetSingleUserQuery } from "@/redux/api/authApi";
import dateFormatter from "@/utils/dateFormatter";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  // console.log(data);

  if (isLoading) return <Loader />;

  return (
    <Stack mx={{ xs: 1, md: 8 }}>
      <Stack py={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Box maxWidth={400} maxHeight={400}>
              {/* donor.userProfile.profilePicture ||  */}
              {data?.userProfile?.profilePhoto ? (
                <Image
                  src={data?.userProfile?.profilePhoto}
                  alt="Donor Image"
                  width={400}
                  height={400}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <Image
                  src={defaultProfile}
                  alt="Donor Image"
                  width={300}
                  height={300}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Stack direction="column" justifyContent="center" height="100%">
              <InfoBox name="Name" value={data?.name} />
              <InfoBox name="Username" value={data?.username} />
              <InfoBox name="Email" value={data?.email} />
              <InfoBox name="Blood Group" value={data?.bloodType} />
              <InfoBox name="Location" value={data?.location} />
              <InfoBox name="Role" value={data?.role} />
              <InfoBox name="Age" value={data?.userProfile?.age} />
              <InfoBox
                name="Last Donation Date"
                value={dateFormatter.stringToMonth(
                  data?.userProfile?.lastDonationDate
                )}
              />
              <Box mt={1} ml={1} display="flex" gap={8}>
                <InfoBox name="Availability" />
                <Chip
                  label={data?.availability ? "Available" : "Unvailable"}
                  color={data?.availability ? "success" : "error"}
                  variant="filled"
                  sx={{ padding: "0.5rem 2rem" }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" gap={1} justifyContent="center">
          <Link href="/dashboard/profile/edit">
            <Button>Edit Profile</Button>
          </Link>
          <Link href="/dashboard/change-password">
            <Button>Change Password</Button>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;

const InfoBox = ({ name, value }: { name?: string; value?: string }) => {
  return (
    <Box display="flex" px={1}>
      <Typography variant="h6" fontWeight={700} sx={{ flex: 1 }}>
        {name}
      </Typography>
      <Typography fontWeight={400} flex={2}>
        {value}
      </Typography>
    </Box>
  );
};
