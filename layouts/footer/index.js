import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      bgcolor: 'primary.main',
      color: 'white',
      py: 1,
      textAlign: 'center',
      zIndex: (theme) => theme.zIndex.appBar,
    }}
  >
    <Typography variant="body2">© {new Date().getFullYear()} Ahmed Abdullah Hashmi</Typography>
  </Box>
);

export default Footer;
