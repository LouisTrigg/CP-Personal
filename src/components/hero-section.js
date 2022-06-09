import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Headline from './hero-headline';
import HeroImage from './hero-image';



const theme = createTheme({
  root:{
    position: 'relative',
    display: 'block',
    height: 'auto',
    overflow: 'hidden',
    background: '#EAE7DC',
    background: '#07101d',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'rgba(241, 239, 240, .1)\', endColorstr=\'rgba(241, 239, 240, .1)\',GradientType=1 )', /* IE6-9 */
    bgcolor: '#07101d',
    boxShadow: 1,
    minWidth: 300,
    },
    '&::before': {
      content: '',
      clear: 'both',
    },
    '&::after': {
      content: '',
      clear: 'both',
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '50%',
      height: '20%',
      bgcolor: 'white',
    },
});



export default function HeroSection(){

  return(
    <ThemeProvider theme={theme}>
      <Box
        sx={[
          {
          top: 0,
          pt: 10,
          pb: 10,
          position: 'relative',
          height: 'auto',
          display: 'block',
          overflow: 'hidden',
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'rgba(241, 239, 240, .1)\', endColorstr=\'rgba(241, 239, 240, .1)\',GradientType=1 )', /* IE6-9 */
          bgcolor: '#07101d',
          bgcolor: 'inherit',
          boxShadow: 1,
          minWidth: 300,
          },
          '&::before': {
            content: '',
            clear: 'both',
          },
          '&::after': {
            content: '',
            clear: 'both',
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '50%',
            height: '20%',
            bgcolor: 'white',
          },
        ]}
      >
        <Grid container spacing={12}>
            <Grid item xs={12} sm={6}>
              <HeroImage />
            </Grid>
            {/*<Grid item xs={12} sm={6}>
              <Headline />
            </Grid>*/}

        </Grid>
      </Box>
    </ThemeProvider>
  );

}
