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
import blankImage from "@/assets/blank-profile.png";
import dateFormatter from "@/utils/dateFormatter";
import Contact from "./Contact";
import { config } from "@/config";
import assets from "@/assets";

const DonorDetailsPage = async ({
  params,
}: {
  params: { donorId: string };
}) => {
  const res = await fetch(`${config.baseUrl}/donor-list/${params.donorId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  const donor = data.data as any;

  return (
    <Container maxWidth="lg">
      <Stack py={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Box maxWidth={400} maxHeight={400}>
              <Image
                src={
                  donor.userProfile.profilePhoto || assets.images.dafult_profile
                }
                alt="Donor Image"
                width={360}
                height={360}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Stack direction="column" justifyContent="center" height="100%">
              <InfoBox name="Name" value={donor.name} />
              <InfoBox name="Username" value={donor.username} />
              <InfoBox name="Email" value={donor.email} />
              <InfoBox name="Status" value={donor.status} />
              <InfoBox name="Blood Group" value={donor.bloodType} />
              <InfoBox name="Location" value={donor.location} />
              <InfoBox
                name="Last Donation Date"
                value={dateFormatter.stringToMonth(
                  donor.userProfile.lastDonationDate
                )}
              />
              <Box mt={1} display="flex" gap={4}>
                <Chip
                  label={donor.availability ? "Available" : "Not Available"}
                  color={donor.availability ? "success" : "error"}
                  variant="filled"
                  sx={{ padding: "0.5rem 2rem" }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack py={2} pb={5}>
        <Container maxWidth="xs">
          <Stack boxShadow={24} p={3}>
            <Typography variant="h5" fontWeight={700} mb={2} textAlign="center">
              Contact With donor
            </Typography>
            <Contact donorId={params.donorId} />
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
};

export default DonorDetailsPage;

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
