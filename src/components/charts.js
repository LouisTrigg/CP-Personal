import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import LiteracyRates from './literacyrates.js';
import GraduationRates from './graduationrates.js';
import DropoutRates from './dropoutrates.js';
import { Element } from 'react-scroll'


const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    display: 'block',
  },
  biographyContainer: {
    margin: '0 auto',
    textDecoration: 'none',
    padding: '90px 30px',
    maxWidth: '75rem',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md', 'lg')]: {
      width: '75%',
    },

  },
  header: {
    margin: '0px 0 20px 0',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: 'rgba(77, 83, 96, 1)',
    letterSpacing: '0.1em',
  },
  positionSummary: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '22px 0px 0px 0px',
    [theme.breakpoints.up('md', 'lg')]: {
      padding: '42px 0px 14px 0px',
    },
  },
  positionTitle: {
    margin: '0 auto',
    letterSpacing: '.1em',
    wordSpacing: '.1em',
    lineHeight: 1.5,
    color: 'rgba(77, 83, 96, 1)',
    fontWeight: '600',
  },
  positionSubtitle: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: 1.6,
    maxWidth: '500px',
  },
  positionDate: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    lineHeight: 1.6,
    maxWidth: '500px',
  },
  comingSoon: {
    position: 'relative',
    margin: '0 auto',
    minHeight: '250px',
    '& div': {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      top: '50%',
      left: '50%',
      '-ms-transform': 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
    },
  },
  dashboard: {
    position: 'relative',
    display: 'grid',
    gridTemplate: 'auto auto / 1fr 1fr',
    gridGap: '25px',
    margin: '40px auto 0 auto',
    width: '90%',
    overflow: 'hidden',
    clear: 'both',
    [theme.breakpoints.down('sm')]: {
      gridTemplate: 'auto / auto',
      display: 'block',
      width: '100%',

    },
  },
  literacy: {
    position: 'relative',
    display: 'grid',
    'grid-template': '1fr /1fr 1fr',
    gridGap: '60px',
    gridColumn: '1 / 3',
    gridRow: '1 / 2',
    backgroundColor: 'rgba(242, 243, 245, .5)',
    color: '#606060',
    padding: '25px',
    '& a':{
      color: 'inherit',
      '&:hover':{
        color: 'rgba(244, 91, 49, 1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '25px',
      padding: '5px',
    },
  },
  graduation: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gridColumn: '1 / 2',
    gridRow: '2',
    backgroundColor: 'rgba(242, 243, 245, .5)',
    color: '#606060',
    padding: '25px',
    '& a':{
      color: 'inherit',
      '&:hover':{
        color: 'rgba(244, 91, 49, 1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      display: 'grid',
      'grid-template': '1fr /1fr 1fr',
      gridGap: '60px',
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      backgroundColor: 'rgba(242, 243, 245, .5)',
      color: '#606060',
      padding: '25px',
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '25px',
      padding: '5px',
    },
  },
  dropout: {
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gridColumn: '2 / 3',
    gridRow: '2',
    backgroundColor: 'rgba(242, 243, 245, .5)',
    color: '#606060',
    padding: '25px',
    '& a':{
      color: 'inherit',
      '&:hover':{
        color: 'rgba(244, 91, 49, 1)',
      },
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      display: 'grid',
      'grid-template': '1fr /1fr 1fr',
      gridGap: '60px',
      gridColumn: '1 / 3',
      gridRow: '1 / 2',
      backgroundColor: 'rgba(242, 243, 245, .5)',
      color: '#606060',
      padding: '25px',
      marginBottom: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '5px',
    },
  },
  chartHeader: {
    position: 'relative',
    display: 'block',
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gridTemplate: 'auto / auto',
    gridGap: '25px',
    margin: '22px 0 32px 0',
    maxWidth: '750px',
    lineHeight: 2,
    [theme.breakpoints.down('xs')]: {
      margin: '28px 0 28px 0',
      lineHeight: 2.7,
    },
  },
  visual: {
    margin: '22px 0 32px 0',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 0 0px 0',
    },
  },
  highlighter: {
    display: 'inline',
    color: 'rgba(77, 83, 96, 1)',
    color: 'rgba(33, 36, 42, 1)',
    color: 'rgba(136,0,29,1)',
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontWeight: 'normal',
    },
  }
});

class Charts extends Component {

  render(){

    const { classes } = this.props;

    return(
      <Fragment>
        <Element name="positionbriefs" className="element">
          <div className={classes.root}>
            <div className={classes.biographyContainer}>

              <Typography variant="h5" color='inherit' align='left' gutterBottom>
                <div className={classes.header}>
                  Stats
                </div>
              </Typography>

              <Divider light />



              <div className={classes.positionSummary}>

                <Typography variant="subheading" color='inherit' align='left' gutterBottom>
                  <div className={classes.positionTitle}>
                    Superintendent of Gary Community School Corporation
                  </div>
                </Typography>

                <Typography variant="body1" color='inherit' align='justify' gutterBottom>
                  <div className={classes.positionSubtitle}>
                    GCSC fought to establish a stable environment for the development of
                    common foundational skills.
                  </div>
                </Typography>

                <Typography variant="body1" color='inherit' align='left' gutterBottom>
                  <div className={classes.positionDate}>
                    Length: 2012 - 2018
                  </div>
                </Typography>


              </div>




              <article className={classes.dashboard}>

                <div className={classes.literacy}>

                  <Hidden smDown>
                    <div className={classes.chartHeader}>
                      <Typography variant="h6" color='inherit' align='left' gutterBottom>
                        Within 3 years, <div className={classes.highlighter}>we cut the state-local achievement gap by 65% in 3rd grade performance,</div> the
                        most statistically-relevant <a href="https://files.eric.ed.gov/fulltext/ED518818.pdf" target="_blank">predictor</a> for student development.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://compass.doe.in.gov/dashboard/iread3perf.aspx?type=corp&id=4690" target="_blank">Indiana Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>

                  <Hidden mdUp>
                    <div className={classes.chartHeader}>
                      <Typography variant="body1" color='inherit' align='left' gutterBottom>
                        Within 3 years, <div className={classes.highlighter}>we cut the state-local achievement gap by 65% in 3rd grade performance,</div> the
                        most statistically-relevant <a href="https://files.eric.ed.gov/fulltext/ED518818.pdf" target="_blank">predictor</a> for student development.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://compass.doe.in.gov/dashboard/iread3perf.aspx?type=corp&id=4690" target="_blank">Indiana Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>


                  <div className={classes.visual}>
                    <LiteracyRates />
                  </div>

                </div>


                <div className={classes.graduation}>

                  <Hidden smDown>
                    <div className={classes.chartHeader}>
                      <Typography variant="subheading" color='inherit' align='left' gutterBottom>
                          <div className={classes.highlighter}>Graduation rates jumped 49%</div> alongside investments in advanced placement courses and college preparation.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://compass.doe.in.gov/dashboard/ceexams.aspx?type=corp&id=4690" target="_blank">Indiana Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>

                  <Hidden mdUp>
                    <div className={classes.chartHeader}>
                      <Typography variant="body1" color='inherit' align='left' gutterBottom>
                          <div className={classes.highlighter}>Graduation rates jumped 49%</div> alongside investments in advanced placement courses and college preparation.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://compass.doe.in.gov/dashboard/ceexams.aspx?type=corp&id=4690" target="_blank">Indiana Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>


                  <div className={classes.visual}>
                    <GraduationRates />
                  </div>

                </div>


                <div className={classes.dropout}>

                  <Hidden smDown>
                    <div className={classes.chartHeader}>
                      <Typography variant="subheading" color='inherit' align='left' gutterBottom>
                          We fought to disrupt the school-to-prison pipeline by achieving <div className={classes.highlighter}>the district's lowest dropout and exclusionary discipline rates</div> in three decades.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://ocrdata.ed.gov/flex/Reports.aspx?type=district" target="_blank">U.S. Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>

                  <Hidden mdUp>
                    <div className={classes.chartHeader}>
                      <Typography variant="body1" color='inherit' align='left' gutterBottom>
                          We fought to disrupt the school-to-prison pipeline by achieving <div className={classes.highlighter}>the district's lowest dropout and exclusionary discipline rates</div> in three decades.
                      </Typography>
                      <Typography variant="caption" color='inherit' align='left' gutterBottom>
                        Data from <a href="https://ocrdata.ed.gov/flex/Reports.aspx?type=district" target="_blank">U.S. Department of Education</a>
                      </Typography>
                    </div>
                  </Hidden>

                  <div className={classes.visual}>
                    <DropoutRates />
                  </div>

                </div>


              </article>


            </div>
          </div>
        </Element>
      </Fragment>
    );
  }
}


export default withStyles(styles, { withTheme: true })(Charts);
