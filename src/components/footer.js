import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import MuiDialogActions from '@material-ui/core/DialogActions';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    margin: '0',
    marginBottom: '0',
    padding: '20px',
    color: '#a4aab5',
  },
  legal: {
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    maxWidth: '35rem',
    justifyContent: 'space-around',
    padding: '5px 20px 0 20px',
    [theme.breakpoints.up('sm', 'md', 'lg')]: {
      padding: '5px 120px 0 120px',
    },
  },
  legalItem: {
    '& a': {
      textDecoration: 'none',
    }
  },
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="subheading" align="center">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class Footer extends Component {

  state = {
    legalOpen: false,
    privacyOpen: false,
  };

  handleLegalClickOpen = () => {
  this.setState({ legalOpen: true });
  };

  handleLegalClose = () => {
    this.setState({ legalOpen: false });
  };

  handlePrivacyClickOpen = () => {
  this.setState({ privacyOpen: true });
  };

  handlePrivacyClose = () => {
    this.setState({ privacyOpen: false });
  };

  render() {

    const { classes, fullScreen } = this.props;

    return (

      <Fragment>
        <footer className={classes.root}>
          <Typography variant="overline" color='inherit' align='center' gutterBottom>
            &copy; 2021 Cheryl Pruitt. All rights reserved.
          </Typography>

          <div className={classes.legal}>
            <div className={classes.legalItem}>
              <Button variant="flat" color="inherit" small disableRipple disableTypography onClick={this.handleLegalClickOpen}>
                <Typography variant="caption" color='#a4aab5' align='center' gutterBottom>
                  Legal
                </Typography>
              </Button>

              <Dialog
                fullScreen={fullScreen}
                open={this.state.legalOpen}
                onClose={this.handleLegalClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">{"Copyright"}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    All Website design, text, graphics, and the selection and
                    arrangement thereof, are the sole property and copyright
                    of www.cherylpruitt.org, all rights reserved.
                    Copyrights for the photographs reproduced herein is
                    vested with Cheryl Pruitt, and may not be reproduced
                    in any form without prior permission. Any other use of
                    materials on this Website, including reproduction for
                    purposes other than those noted above, modification,
                    distribution, or republication without the prior
                    written permission of Cheryl Pruitt is strictly prohibited.
                  </DialogContentText>
                </DialogContent>

                <DialogActions>
                  <Button variant="flat" onClick={this.handleLegalClose} color="primary">
                    Acknowledge
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

            <div className={classes.legalItem}>
              <Button color="inherit" small disableRipple disableTypography onClick={this.handlePrivacyClickOpen}>
                <Typography variant="caption" color='#a4aab5' align='center' gutterBottom>
                  Privacy
                </Typography>
              </Button>

              <Dialog
                fullScreen={fullScreen}
                open={this.state.privacyOpen}
                onClose={this.handlePrivacyClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">{"Privacy"}</DialogTitle>
                <DialogContent><br />
                  <DialogContentText>
                    This Privacy Policy changes from time to time.
                    Changes under this Privacy Policy will not reduce your rights
                    without explicit notice. This Privacy Policy will always
                    indicate the date the last changes were published and
                    we offer access to archived versions for your review.
                    If changes are significant, a more prominent option to confirm
                    consent will be provided.<br /><br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      AUTOMATICALLY COLLECTED INFORMATION
                    </Typography><br />
                    When you access or use our Site, we automatically collect
                    information about you, including:<br /><br />

                    <Typography variant="body1" color='#a4aab5' align='left' gutterBottom>
                      Log and Usage Information:
                    </Typography>
                    We collect information related to
                    your access to and use of the Site, including the type of
                    browser you use, app version, access times, pages viewed,
                    your IP address, and the page you visited before
                    navigating to our Site.<br /><br />

                    <Typography variant="body1" color='#a4aab5' align='left' gutterBottom>
                      Device Information:
                    </Typography>
                    We collect information about the
                    computer or mobile device you use to access our
                    Site, including the hardware model, operating system
                    and version, unique device identifiers, and
                    mobile network information.<br /><br />

                    <Typography variant="body1" color='#a4aab5' align='left' gutterBottom>
                      Information Collected by Cookies and Similar Tracking
                      Technologies:
                    </Typography>
                    We (and our service providers) use different
                    technologies to collect information, including cookies
                    and web beacons.<br /><br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      USE OF INFORMATION
                    </Typography><br />
                    We may use the information we collect to:<br /><br />

                    Provide, maintain and improve our Site;<br /><br />

                    Provide and deliver the information you request;<br /><br />

                    Send you technical notices, updates, security alerts, and
                    support and administrative messages and provide technical
                    support;<br /><br />

                    Respond to your emails, submissions, comments, questions and
                    requests;<br /><br />

                    Sending you information to keep you informed about various
                    issues, campaigns, events, and provide news and information we
                    think will be of interest to you.<br /><br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      SHARING OF INFORMATION
                    </Typography><br />

                    We may not share information with any third party vendor
                    under this Privacy Policy.<br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      SOCIAL SHARING FEATURES
                    </Typography><br />

                    The Site may offer social sharing features and other
                    integrated tools (such as the Facebook “Like” button), which
                    let you share actions you take on our Site with other media,
                    and vice versa. Your use of such features enables the sharing
                    of information with your friends or the public, depending
                    your privacy for the relevant social media site.<br /><br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      YOUR CHOICES
                    </Typography><br />
                    <Typography variant="body1" color='#a4aab5' align='left' gutterBottom>
                      Cookies<br />
                    </Typography>
                    Most web browsers are set to accept cookies by default. If
                    you prefer, you can usually choose to set your browser
                    to remove or reject browser cookies. You can also review
                    your choices regarding behavioral advertising cookies
                    at www.aboutads.info/choices. Please note that if you
                    choose to remove or reject cookies, this could affect the
                    availability and functionality of our Site.<br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="body1" color='#a4aab5' align='left' gutterBottom>
                      Promotional Communications<br />
                    </Typography>
                    You may opt out of receiving promotional emails or text
                    messages from cherylpruitt.org by following the instructions
                    in those emails or text messages. If you opt out, we may
                    still send you non-promotional emails, such as those about
                    your account or our ongoing business relations.<br /><br /><br />
                  </DialogContentText>
                  <DialogContentText>
                    <Typography variant="subtitle2" color='#a4aab5' align='left' gutterBottom>
                      CONTACT US
                    </Typography><br />

                    If you have any questions about this Privacy Policy, please
                    contact us at: <a href="mailto:mail@cherylpruitt.org?Subject=Privacy%20Policy" target="_top">mail@cherylpruitt.org</a>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handlePrivacyClose} color="primary">
                    Acknowledge
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

          </div>

        </footer>
      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withMobileDialog()(Footer));
