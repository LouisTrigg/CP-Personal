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
import Moments from '../components/moments';



const styles = theme => ({
  root:{
  },
});


const messages = [
  {id: 1, color: "#5F5F66", byline: "I am a Midwesterner, born of two working-class Southerners during the Civil Rights era."},
  {id: 2, color: "", byline: "Early in my life, I recognized the importance of education, as a qualitative factor of agency and fulfillment."},
  {id: 3, color: "#424250", byline: "At 20 years old, I graduated from Rust College with a Bachelors Degree in Chemistry, and proceeded to work in STEM for more than a decade, primarily in health-related roles."},
  {id: 4, color: "#37EFBA", byline: "I worked as a Certifying Scientist, Scientific Researcher, and"},
  {id: 5, color: "#F3407C", byline: "During my early career, I witnessed the lack of practical knowledge in science. As a result, I became a Chemistry teacher to empower future generations with the ability to make informed science-based decisions in their everyday life."},
  {id: 6, color: "", byline: "I ultimately graduated with a doctorate in Education from the University of Memphis."},
  {id: 7, color: "", byline: "My dissertation focused on data driven insights for better student outcomes (Link to Research)"},
  {id: 8, color: "", byline: "Then I went on to face some of the toughest problems in urban education. (Link to Stats)"}
]



export default function Life(props){


  return(
    <Box sx={{
      position: 'relative',
      padding: '0px',
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

      <Typography variant="h4">
        My Story.
      </Typography>

      <Typography variant="h6" align="right">
        If you know, then you know. If you don't, then read.
      </Typography>


      <Grid
        container
        alignItems="stretch" 
        spacing={0}>
      {messages.map((message) => (
        <Grid item xs={12}>
          <Moments message={message.byline} color={message.color} />
        </Grid>

        )
      )}
      </Grid>





    </Box>
  );
}
