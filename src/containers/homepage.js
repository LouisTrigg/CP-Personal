import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MyInvolvement from '../components/myinvolvement.js';
import WhoAmI from '../components/whoamI.js';
import Footer from '../components/footer.js';
import HeroSection from '../components/hero-section.js';
import AppAppBar from '../views/appapp-bar.js';


const styles = theme => ({
  root:{
    position: 'relative',
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

class Homepage extends Component{


  render(){

    const { classes } = this.props;

    return(
      <Fragment>
        <div className={classes.root}>
          <AppAppBar />
          <HeroSection />
          {/*<WhoAmI />
          <MyInvolvement />
          <Footer />*/}
        </div>
      </Fragment>
    );
  }
}

Homepage.propTypes = {

};

export default withStyles(styles, { withTheme: true })(Homepage);
