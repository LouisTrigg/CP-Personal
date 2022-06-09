import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppAppBar from '../views/appapp-bar.js';




const styles = theme => ({
  root:{
    position: 'relative',
    padding: '15px',
    '&::before': {
      content: '',
      clear: 'both',
    },
    '&::after': {
      content: '',
      clear: 'both',
    },
  },
  morebutton: {
    position: "relative",
  }
});

class Brands extends Component{


  render(){

    const { classes } = this.props;

    return(
      <Fragment>
        <div className={classes.root}>
          <AppAppBar />
          <Typography variant="subtitle2">
            For more than three decades, Cheryl has been
            a natural businesswoman.
          </Typography>
          <Typography variant="subtitle2">
            In 20
          </Typography>
        </div>
      </Fragment>
    );
  }
}


export default withStyles(styles, { withTheme: true })(Brands);
