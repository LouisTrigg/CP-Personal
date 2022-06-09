import * as React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};


let theme = createTheme();
theme = responsiveFontSizes(theme);



export default function MyInvolvement() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{ fontFamily: 'Helvetica Neue',width: '100%', display: 'flex', overflow: 'hidden', bgcolor: '#fff' }}
      >

        <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
          <Grid container spacing={12}>
            <Grid item xs={12}>
              <Typography align="left" variant="h2" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 4 }}>
                My Involvement
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" variant="h4" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 3 }}>
                What I'm Up To?
              </Typography>
            </Grid>
            <Grid item xs={12}>

              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Typography align="justify" variant="h6" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 2 }}>
                    I've gained more than 20 years in community development for more than the fair share of being my community. I have more than 30 years in the last time for the parents that
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography align="jusitfy" variant="h6" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 2 }}>
                    I've gained more than 20 years in community development for more than the fair share of being my community. I have more than 30 years in the last time for the parents that
                  </Typography>
                </Grid>
              </Grid>
            </Grid>



            <Grid item xs={12}>
              <Typography align="left" variant="h4" gutterBottom component="div" sx={{ my: 5, fontWeight: 'fontWeightBold',  letterSpacing: 3 }}>
                Roles
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
                  Executive
                </Typography>
              </Box>
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
                  Director
                </Typography>
              </Box>
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
                  Educator
                </Typography>
              </Box>
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
                  Researcher
                </Typography>
              </Box>
            </Grid>



          </Grid>
        </Container>

      </Box>
    </ThemeProvider>
  );
}
