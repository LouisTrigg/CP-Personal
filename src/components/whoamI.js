import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba((113, 77, 105, 1)',
  px: 5,
};

export default function WhoAmI() {
  return (
    <Box
      component="section"
      sx={{ width: '100%', display: 'flex', overflow: 'hidden', bgcolor: '#fff' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 4 }}>
              Who Am I?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src={require("../5834284.png")}
                alt="brain"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5, fontWeight: 700, textTransform: 'capitalize' }}>
                Cognitive Development
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src={require("../6545711.png")}
                alt="capgown"
                sx={{ height: 55}}
              />
              <Typography variant="h6" sx={{ my: 5, fontWeight: 700, textTransform: 'capitalize', letterSpacing: 1 }}>
                Educational Attainment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src={require("../473043.png")}
                alt="heart"
                sx={{ height: 55 }}
              />
              <Typography  variant="h6" sx={{ my: 5, fontWeight: 700, textTransform: 'capitalize' }}>
                Health & Wellness
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src={require("../2922431.png")}
                alt="beaker"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5, fontWeight: 700, textTransform: 'capitalize' }}>
                Scholarship
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
}
