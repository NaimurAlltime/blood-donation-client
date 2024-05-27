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
  Pagination,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import noData from "@/assets/no-data.png";
import DonorFilter from "@/components/UI/Donor/DonorFilter";
import DonorCard, { TDonor } from "@/components/UI/Donor/DonorCard";

const BloodPage = () => {
  const [defaultValues, setDefaultValues] = useState({
    bloodType: "",
    availability: "",
    location: "",
    searchTerm: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isFetching, isLoading } = useGetAllDonorQuery({
    ...defaultValues,
    // page: currentPage,
  });

  console.log("first", data);

  const handlePageChange = (value: any) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      {/* Filter section */}
      <DonorFilter
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
      />

      {/* Card section */}
      <Box sx={{ margin: "50px 0px" }}>
        <Grid container spacing={3}>
          {data?.donors?.length > 0 && !isFetching ? (
            data.donors.map((donor: TDonor) => (
              <Grid key={donor.id} item md={4}>
                <DonorCard donor={donor} />
              </Grid>
            ))
          ) : (
            <>
              {!isFetching && (
                <Box sx={{ margin: "0 auto" }}>
                  <Image height={400} width={600} src={noData} alt="no data" />
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

        {/* Pagination */}
        {data?.length > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={data.length}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default BloodPage;
