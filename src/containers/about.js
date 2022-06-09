import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Hidden from '@mui/material/Hidden';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Charts from '../components/charts.js';
import AppAppBar from '../views/appapp-bar.js';


const styles = theme => ({
  root:{
  },
});

function About(props){


  return(
    <Box sx={{
      position: 'relative',
      padding: '15px',
      display: 'block',
      zIndex: '100',
      backgroundColor: 'inherit',
      '&::before': {
        content: '""',
        clear: 'both',
      },
      '&::after': {
        content: '""',
        clear: 'both',
      },
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          pt: 2,
          pb: 5,
        }}>
          <Typography variant ="h5" align="center">
            Life & Times
          </Typography>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" component="h2" align="justify" gutterBottom>
              Cheryl graduated from Rust College with a Bachelor's
              degree in Chemistry, and she later graduated from the
              University of Memphis with a Doctorate in
              Education. Over the course of three decades, she has worked as a health researcher, teacher,
              school administrator, hospital administrator, and economic advisor.

              Cheryl Pruitt is a STEM speciailist, school administrator, and healthcare advisor. As
              a former researcher at St Jude's Hospital, Cheryl has contributed to some of the in children
              healthcare. Under Cheryl's leadership in primary and secondary education, she achieved the highest
              literacy and language rates in two decades.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" component="h2" align="justify" gutterBottom>
                Cheeryl
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>


      <Container>
        <Box>
          <Typography align="center" variant="h5">
            What Can We Learn From The Past?
          </Typography>
        </Box>
      </Container>

      <Container>
        <Typography>
          Cheryl has remained committed to implementing integrative processes and programs that enhance
          growth. She has gained advanced insight into private market and legislative strategies
          that impact community development.
          As such, she has worked with various stakeholders to progress the
          economic and social well-being in multiple communities.
          As an experienced practitioner, she has been at the forefront
          of facilitating growth for multiple children. She has expanded her contributions through additional
          research/development and by sharing anecdotes with various stakeholders who
          are equally serious about progressing the
          economic and social well-being of our communities.
        </Typography>

        <Box>
          <Typography variant="subtitle2">
            My dissertation focus, <a target="_blank" href="https://eric.ed.gov/?id=ED515348">Data Driven Decision Making and the Education Administrator</a> allowed me to examine the best practices of focus for school administrators and teachers whose schools were deemed successful in districts identified as failing.
            Data Driven Decision Making and the School Administrator: A Delphi Study Forecast, Dissertation 2009
          </Typography>
          <Typography variant="body2">
            My earlier research, Integrating Technology into the Chemistry Classroom to Increase Student Achievement allowed me the opportunity to measure student achievement and student engagement.
          </Typography>
        </Box>

        <Charts />

      </Container>
    </Box>
  );
}


export default About;
