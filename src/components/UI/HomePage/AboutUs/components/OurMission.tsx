import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const OurMission = () => {
  return (
    <Stack py={6}>
      <Container>
        {/* <SectionTitle title='About Us' /> */}

        <Grid container>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Typography
                component="p"
                fontSize={28}
                fontWeight={500}
                color="#565353"
                sx={{ mb: 1.3 }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" m={0} paragraph textAlign="justify">
                Our mission is to provide a reliable and accessible platform for
                blood donation, ensuring that everyone has the opportunity to
                contribute to this vital cause. We aim to raise awareness about
                the importance of regular blood donations, highlighting how each
                contribution can save lives and make a significant impact. By
                supporting hospitals and healthcare providers, we strive to
                maintain a steady and sufficient supply of blood, critical for
                various medical treatments and emergencies. We also seek to
                build a strong community of dedicated donors who are committed
                to the lifesaving mission of blood donation, fostering a culture
                of generosity and compassion.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box p={1}>
              <Image
                src="https://img.freepik.com/premium-vector/world-blood-donation-day-illustration-concept_701961-2377.jpg?w=900"
                alt="About Us"
                width={480}
                height={320}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default OurMission;
