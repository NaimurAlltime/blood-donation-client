import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  SxProps,
  Typography,
} from "@mui/material";

const SuccessStories = ({ sx }: { sx?: SxProps }) => {
  return (
    <Container>
      <Box py={8} sx={{ ...sx }}>
        <Container>
          <Box textAlign={"center"}>
            <Typography
              component="p"
              fontSize={28}
              fontWeight={500}
              color="#1586FD"
              sx={{ mb: 2 }}
            >
              Success Stories
            </Typography>
            <Typography
              component="p"
              fontSize={18}
              fontWeight={400}
              sx={{ mt: 1 }}
            >
              Life Renewed: Inspiring Blood Donation Success Stories
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" mt={1}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ bgcolor: "transparent", boxShadow: 12, p: 2 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "justify",
                      fontStyle: "italic",
                      lineHeight: 1.1,
                    }}
                  >
                    I donated blood for the first time in my life. I didn't have
                    any clear idea about the procedure or what I was expected to
                    do or in what way
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ bgcolor: "transparent", boxShadow: 16, p: 2 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "justify",
                      fontStyle: "italic",
                      lineHeight: 1.1,
                    }}
                  >
                    During my initial visits as a donor, the blood centre doctor
                    and staff did their part in educating me about the shortage
                    of blood and its impact on the needy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <br />
        </Container>
      </Box>
    </Container>
  );
};

export default SuccessStories;
