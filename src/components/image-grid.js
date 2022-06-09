import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Photo1 from '../IMG_5121.png';
import Photo2 from '../IMG_3285.jpg';
import Photo3 from '../DrCherylPruitt.jpg';
import Photo4 from '../DrCherylPruittpic.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  images: {
    height: "auto",
    width: "100%"
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function ImageGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={3.5}>

        <ImageListItem cols={1} rows={1} key={"1"}>
          <img className={classes.images} src={Photo1} alt="Photo1" />
          <ImageListItemBar
            title={"Photo1"}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`star ${"Photo1"}`}>
                <FavoriteIcon className={"Photo1"} />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem key={"1"}>
          <img className={classes.images} src={Photo2} alt="Photo1" />
          <ImageListItemBar
            title={"Photo1"}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`star ${"Photo1"}`}>
                <FavoriteIcon className={"Photo1"} />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem key={"1"}>
          <img className={classes.images} src={Photo3} alt="Photo1" />
          <ImageListItemBar
            title={"Photo1"}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`star ${"Photo1"}`}>
                <FavoriteIcon className={"Photo1"} />
              </IconButton>
            }
          />
        </ImageListItem>

        <ImageListItem key={"1"}>
          <img className={classes.images} src={Photo4} alt="Photo1" />
          <ImageListItemBar
            title={"Photo1"}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`star ${"Photo1"}`}>
                <FavoriteIcon className={"Photo1"} />
              </IconButton>
            }
          />
        </ImageListItem>



      </ImageList>
    </div>
  );
}
