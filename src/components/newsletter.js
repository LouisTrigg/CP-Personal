import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '15px',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontWeight: 600,
    letterSpacing: '.01em',
    textTransform: 'capitalize'
  }
}));

export default function Newsletter() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>

          <Container maxWidth="lg">
            <Box>
              <Grid container alignItems="center" alignContent="space-around" justifyContent="space-around" spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="left" className={classes.title}>
                        Newsletter
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="left" variant="subtitle2">
                        Sign up with your email to receive direct news and updates.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid alignItems="center" justifyContent="center" container spacing={3}>
                    <Grid alignContent="center" item xs={12} sm={6}>
                      <TextField
                       id="filled-full-width"
                       label="Label"
                       style={{ margin: 8 }}
                       placeholder="Enter your email"
                       helperText="Full width!"
                       fullWidth
                       margin="normal"
                       InputLabelProps={{
                         shrink: true,
                       }}
                       variant="filled"
                     />
                    </Grid>
                    <Grid alignItems="center" alignContent="center" item xs={12} sm={6}>
                      <Button>
                        Subscribe
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>

          
      </Grid>
    </div>
  );
}
