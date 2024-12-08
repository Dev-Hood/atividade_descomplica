import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardInfo = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto', padding: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardInfo;
