"use client";

import { useGetAllDonorQuery } from "@/redux/api/donorApi";
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import noData from "@/assets/no-data.png";
import DonorCard, { TDonor } from "../../Donor/DonorCard";
import DonorFilter from "../../Donor/DonorFilter";
import Link from "next/link";

const BloodDonor = () => {
  const [defaultValues, setDefaultValues] = useState({
    bloodType: "",
    availability: "",
    location: "",
    searchTerm: "",
  });

  const { data, isFetching, isLoading } = useGetAllDonorQuery(defaultValues);
  // console.log(data);

  return (
    <Container>
      {/* Header section  */}
      <Box my={4}>
        <Box textAlign={"center"}>
          <Typography
            component="p"
            fontSize={28}
            fontWeight={500}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            Search Blood Donors
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mb: 2 }}
          >
            This section allows users to search and filter for blood donors by
            name, blood type, location, and availability status.
            <br />
            Easily find the most suitable donors using the search field and
            filters provided.
          </Typography>
        </Box>
      </Box>
      {/*  Filter section */}
      <DonorFilter
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
      />
      {/* Card section */}

      <Box
        sx={{
          margin: "50px 0px",
        }}
      >
        <Grid container spacing={3}>
          {data?.length > 0 && !isFetching ? (
            <>
              {data?.map((donor: TDonor) => (
                <Grid key={donor.id} item md={4}>
                  <DonorCard donor={donor} />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {!isFetching && (
                <Box
                  sx={{
                    margin: "0 auto",
                  }}
                >
                  <Image height={200} width={300} src={noData} alt="no data" />
                </Box>
              )}
            </>
          )}
          {isLoading && (
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Skeleton variant="rectangular" height={400} />
              </Grid>
              <Grid item md={4}>
                <Skeleton variant="rectangular" height={400} />
              </Grid>
              <Grid item md={4}>
                <Skeleton variant="rectangular" height={400} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
      <Stack direction="row" my={3} justifyContent="center">
        <Link href="/donor">
          <Button>View All Donor</Button>
        </Link>
      </Stack>
    </Container>
  );
};

export default BloodDonor;
