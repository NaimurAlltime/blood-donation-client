// components/CardComponent.tsx

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowDownward as ArrowDownIcon } from '@mui/icons-material';
import { ArrowUpward as ArrowUpIcon } from '@mui/icons-material';
import { AttachMoney as CurrencyDollarIcon } from '@mui/icons-material';
import { People as UsersIcon } from '@mui/icons-material';
import { CalendarToday as CalendarIcon } from '@mui/icons-material';
import { Public as GlobeIcon } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material/styles';


interface CardProps {
  title: string;
  value: string;
  diff?: number;
  trend?: 'up' | 'down';
  icon: React.ReactNode;
  iconColor: string;  // New prop for icon background color
  sx?: SxProps<Theme>;
}

const TrendIcon = ({ trend }: { trend: 'up' | 'down' }) =>
  trend === 'up' ? (
    <ArrowUpIcon color="success" />
  ) : (
    <ArrowDownIcon color="error" />
  );

export function CardComponent({ title, value, diff, trend, icon, iconColor, sx }: CardProps) {
  const trendColor = trend === 'up' ? 'success.main' : 'error.main';

  return (
    <Card sx={{ ...sx, minWidth: 200 }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {title}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: iconColor, height: 56, width: 56 }}>
              {icon}
            </Avatar>
          </Stack>
          {diff !== undefined && (
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Stack sx={{ alignItems: 'center' }} direction="row" spacing={0.5}>
                <TrendIcon trend={trend as any} />
                <Typography color={trendColor} variant="body2">
                  {diff}%
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                Since last month
              </Typography>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
