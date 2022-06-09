import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Photo1 from '../virtual-backgrounds.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    padding: '15px',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  titlebox: {
    padding: '5px',
    borderBottom: '1px solid black'
  },
  title1: {
    fontWeight: 600,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const GridBase = withStyles(theme => ({
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
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    /*width: 128,
    height: 128,*/
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}))(props => {
  const { children, classes, onClose, header, paragraph, imageSource } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Box component="span" m={3}>
            <div className={classes.image}>
              <img className={classes.img} alt="complex" src={imageSource} style={{height: "auto", width: "100%"}} />
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                {header}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {paragraph}
              </Typography>
            </Grid>
            <Grid item>
              <ButtonBase onClick={handleClickOpen}>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Continue
                </Typography>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

const DialogBase = withStyles(theme => ({
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
  const { children, classes, onClose, header, paragraph, imageSource } = props;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridBase header={header} paragraph={paragraph} imageSource={imageSource} />
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </div>
  );
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Blog() {

  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Box className={classes.titlebox}>
              <Typography className={classes.title1} variant ="h5" align="left">
                The Interludes
              </Typography>
            </Box>
          </Container>
          <Container maxWidth="lg">
            <Box>
              <Typography variant ="h6" align="left">
                More {/*episodic*/} reflections on business, technology, education, health, and more.
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <DialogBase imageSource={Photo1} header={"Header"} paragraph={"Full resolution 1920x1080 • JPEG"} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DialogBase imageSource={Photo1} header={"Header"} paragraph={"Full resolution 1920x1080 • JPEG"} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DialogBase imageSource={Photo1} header={"Header"} paragraph={"Full resolution 1920x1080 • JPEG"} />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>





    </div>
  );
}
