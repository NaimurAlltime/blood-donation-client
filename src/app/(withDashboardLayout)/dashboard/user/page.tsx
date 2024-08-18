// pages/dashboard.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AttachMoney as CurrencyDollarIcon } from '@mui/icons-material';
import { People as UsersIcon } from '@mui/icons-material';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';
import { Public as GlobeIcon } from '@mui/icons-material';
import { CardComponent } from '@/components/Dashboard/DashboardOverview/CardComponent';
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { BloodRequestChart } from '@/components/Dashboard/DashboardOverview/BloodRequestChert';

const mockChartSeries = [
  { name: 'Requests', data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 100, 80, 60] },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent
            title="Total Donation"
            value="256"
            diff={12}
            trend="up"
            icon={<BloodtypeIcon fontSize="inherit" />}
            iconColor="primary.main"  // Different background color
            sx={{ bgcolor: 'background.paper', boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent
            title="Users"
            value="1,200"
            diff={-5}
            trend="down"
            icon={<UsersIcon fontSize="inherit" />}
            iconColor="secondary.main"  // Different background color
            sx={{ bgcolor: 'background.paper', boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent
            title="Events"
            value="45"
            diff={8}
            trend="up"
            icon={<CalendarIcon fontSize="inherit" />}
            iconColor="info.main"  // Different background color
            sx={{ bgcolor: 'background.paper', boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardComponent
            title="Visitors"
            value="3,400"
            diff={-10}
            trend="down"
            icon={<GlobeIcon fontSize="inherit" />}
            iconColor="warning.main"  // Different background color
            sx={{ bgcolor: 'background.paper', boxShadow: 3 }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BloodRequestChart chartSeries={mockChartSeries} sx={{ mt: 3 }} />
      </Grid>
    </Box>
  );
};

export default Dashboard;
