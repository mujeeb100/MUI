// CustomAvatars.tsx
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple, green, pink } from '@material-ui/core/colors';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Grid from '@material-ui/core/Grid';

interface CustomIconAvatarsProps {
  iconLabels: string[];
  iconColors: string[];
  avatarImages: string[];
  avatarSizes: 'small' | 'regular' | 'large';
  avatarLetters: string[];
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }),
);

export const CustomIconAvatars: React.FC<CustomIconAvatarsProps> = ({
  iconLabels,
  iconColors,
  avatarImages,
  avatarSizes,
  avatarLetters,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid container direction="column" alignItems="center">
        {iconLabels.map((label, index) => (
          <Avatar key={index} style={{ backgroundColor: iconColors[index] }}>
            {label === 'Folder' ? <FolderIcon /> : label === 'Pageview' ? <PageviewIcon /> : <AssignmentIcon />}
          </Avatar>
        ))}
        Sizes icon
        {avatarSizes === 'small' && (
          <Avatar alt="Remy Sharp" src={avatarImages[0]} className={`${classes.small} ${classes.pink}`} />
        )}
        {avatarSizes === 'regular' && <Avatar>{avatarLetters[0]}</Avatar>}
        {avatarSizes === 'large' && (
          <Avatar alt="Remy Sharp" src={avatarImages[0]} className={`${classes.large} ${classes.green}`} />
        )}
        Character name of avatar
        {avatarLetters.map((letter, index) => (
          <Avatar key={index} className={index === 1 ? classes.orange : index === 2 ? classes.purple : undefined}>
            {letter}
          </Avatar>
        ))}
      </Grid>
        {/* <Grid container direction="column" alignItems="center">
          avatator icon
      <Avatar>
        <FolderIcon />
      </Avatar>
      <Avatar className={classes.pink}>
        <PageviewIcon />
      </Avatar>
      <Avatar className={classes.green}>
        <AssignmentIcon />
      </Avatar>
      sizes icon
      {/* Small Avatar */}
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={`${classes.small} ${classes.pink}`} /> */}

      {/* Regular Avatar */}
      {/* <Avatar>
        <FolderIcon />
      </Avatar> */}

      {/* Large Avatar */}
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={`${classes.large} ${classes.green}`} />
     character name of avatar  */}
     
      {/* <Avatar>H</Avatar>
      <Avatar className={classes.orange}>N</Avatar>
      <Avatar className={classes.purple}>OP</Avatar>
      </Grid> */} */
    </div>
  );
};
