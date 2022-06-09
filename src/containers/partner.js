import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppAppBar from '../views/appapp-bar.js';



const styles = theme => ({
  root:{
    position: 'relative',
    padding: '15px',
    display: 'block',
    zIndex: '100',
    transition: 'all .3s ease-in-out',
    backgroundColor: 'rgba(241, 239, 240, 1)',
    '&::before': {
      content: '',
      clear: 'both',
    },
    '&::after': {
      content: '',
      clear: 'both',
    },
  },
});

class Partner extends Component{


  render(){

    const { classes } = this.props;

    return(
      <Fragment>
        <div className={classes.root}>
        <AppAppBar />
        <Typography variant="subtitle2">
          Cheryl Pruitt is active in a few organizations that extend from books, hemp,
        </Typography>

                    <Typography variant="subtitle2">
                      Healthcare
                    </Typography>
                    <Typography variant="body2">
                      Farming & Medicine, Hemp
                    </Typography>

        </div>
      </Fragment>
    );
  }
}


export default withStyles(styles, { withTheme: true })(Partner);
