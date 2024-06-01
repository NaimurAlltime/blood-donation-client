import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import OurMission from "./components/OurMission";

const AboutUs = () => {
  interface TeamMember {
    name: string;
    role: string;
    avatarUrl: string;
  }

  return (
    <Container>
      <Box my={12}>
        <Box textAlign={"center"}>
          <Typography
            component="p"
            fontSize={28}
            fontWeight={500}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            About Us
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mt: 2 }}
          >
            Welcome to our website! Our mission is to provide exceptional
            services and products to our customers.
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            We strive to exceed expectations and continuously improve our
            offerings. Our team is dedicated to ensuring your
          </Typography>
          <Typography component="p" fontSize={18} fontWeight={400}>
            satisfaction and delivering the highest quality in everything we do.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={3} mt={4}>
            <Grid item xs={12} md={6}>
              <Image
                src="https://img.freepik.com/free-vector/blood-donor-nurse_74855-6262.jpg?t=st=1716383590~exp=1716387190~hmac=c4981f3af82a12b8394694bd3b891b83044e4613eaac77689fe1a09daf612663&w=740"
                alt="about image"
                width={650}
                height={500}
              />
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Avatar
                      src="https://img.freepik.com/free-photo/portrait-man-with-glasses-blue-suit-with-tie-lights-with-blurry-background_181624-17456.jpg?t=st=1716389362~exp=1716392962~hmac=d54eca5bc1711c706c7b8ea67153429c7d81fbe0dc7e77acf8ffa8714732026e&w=900"
                      alt="search-icon"
                      sx={{ width: 85, height: 85, alignItems: "center" }}
                    />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={1}
                    >
                      Abir Khan
                    </Typography>
                    <Typography component="p" fontSize={15} fontWeight={400}>
                      Founder & CEO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Avatar
                      src="https://img.freepik.com/premium-photo/successful-plussize-entrepreneur-her-desk_731930-110776.jpg?w=996"
                      alt="search-icon"
                      sx={{ width: 85, height: 85, alignItems: "center" }}
                    />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={1}
                    >
                      Sanjida Islam
                    </Typography>
                    <Typography component="p" fontSize={15} fontWeight={400}>
                      Chief Officer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Avatar
                      src="https://img.freepik.com/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg?t=st=1716389435~exp=1716393035~hmac=a9b83e323bf6f2043d96cfc6c6202030a1b535c837567e6e07542689ef518f7f&w=826"
                      alt="search-icon"
                      sx={{ width: 85, height: 85, alignItems: "center" }}
                    />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={1}
                    >
                      Awlad Islam
                    </Typography>
                    <Typography component="p" fontSize={15} fontWeight={400}>
                      Head of Marketing
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      backgroundColor: "#fff",
                      border: "1px solid lightgray",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    <Avatar
                      src="https://img.freepik.com/premium-photo/concept-leadership-success-confident-woman-with-arms-crossed_820340-23091.jpg?w=996"
                      alt="search-icon"
                      sx={{ width: 85, height: 85, alignItems: "center" }}
                    />
                    <Typography
                      variant="h6"
                      component="h2"
                      fontWeight={500}
                      mt={1}
                    >
                      Yeasmin Ara
                    </Typography>
                    <Typography component="p" fontSize={15} fontWeight={400}>
                      Product Manager
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <OurMission />
      </Box>
    </Container>
  );
};

export default AboutUs;
