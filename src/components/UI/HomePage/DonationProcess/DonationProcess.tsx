// components/DonationProcess.tsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const DonationProcess: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Box textAlign={"center"}>
          <Typography
            component="p"
            fontSize={28}
            fontWeight={500}
            color="#1586FD"
            sx={{ mb: 1.3 }}
          >
            Blood Donation Process
          </Typography>
          <Typography
            component="p"
            fontSize={18}
            fontWeight={400}
            sx={{ mb: 2 }}
          >
            The donation process from the time you arrive center until the time
            you leave
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Image
              src="https://img.freepik.com/premium-photo/young-woman-making-blood-donation-hospital-blood-donation_176445-9672.jpg?w=900"
              alt="Blood Donation Process"
              layout="responsive"
              width={600}
              height={420}
              priority
              style={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Step 1: Registration"
                  secondary="Provide your identification, contact information, and some basic details about your health."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Step 2: Health History and Mini Physical"
                  secondary="Answer questions about your health history and travel, and receive a quick physical exam to check your temperature, blood pressure, pulse, and hemoglobin level."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Step 3: Donation"
                  secondary="You'll be seated comfortably while a pint of blood is drawn. This part takes about 8-10 minutes."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Step 4: Refreshments"
                  secondary="After donating, you can enjoy a snack and a drink while you relax for 10-15 minutes before resuming your day."
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DonationProcess;
