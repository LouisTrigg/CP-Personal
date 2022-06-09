import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@mui/material/Hidden';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppAppBar from '../views/appapp-bar.js';


const styles = theme => ({
  root:{
  },
});

export default function Moments(props){


  return(
    <Box sx={{
      position: 'relative',
      padding: {
        xs: '25px',
        sm: '35px'
      },
      minHeight: {
        xs: '150px'
,      },
      height: {
        xs: 'auto',
      },
      display: 'block',
      zIndex: '100',
      typography: {
        xs: 'subtitle1',
        sm: 'h6',
        md: 'h5',
        lg: 'h4'
      },
      lineHeight: {
        xs: 3,
        sm: 4,
        md: 5
      },
      textTransform: {
        sm: 'capitalize',
        md: 'uppercase'
      },
      textAlign: {
        xs: 'left',
        sm: 'center'
      },
      fontWeight: {
        sm: 500,
      },
      letterSpacing: 2,
      backgroundColor: props.color,
      '&::before': {
        content: '""',
        clear: 'both',
      },
      '&::after': {
        content: '""',
        clear: 'both',
      },
    }}>
      {props.message}
    </Box>
  );
}
