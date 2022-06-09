import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Photo from '../DrCherylPruittpic18.jpg';

export default function HeroImage() {
  return (
      <Box sx={{
        pt: {xs: 7, sm: 0}
      }}>
        <Box
          component="img"
          sx={{
            position: 'relative',
            display: { sm: 'none', md: 'block' },
            width: '100%',
            maxWidth: '90%',
            height: 'auto',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            objectFit: 'contain',
            boxShadow: '0 3px 100px rgb(0 0 0 / 0.2)',
            borderRadius: '2px',
            opacity: '0.9',
            filter: 'grayscale(70%) sepia(20%) opacity(96%) invert(5%)',
          }}
          alt="Hero Image"
          src={Photo}
        />
      </Box>
  );
}
