import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles(theme => ({
  root: {},
  linkText: {
    marginLeft: 5
  }
}));

export default function Navigation({ onNavToggle }) {

  const classes = useStyles();
  
  return (
    <div>
      <IconButton onClick={ () => onNavToggle() }>
        <ChevronLeftIcon/>
      </IconButton>
      <Divider/>
      <List>
        <ListItem component="a" button href="#about">
          <AccountBoxIcon /> <span className={ classes.linkText }>About Me</span>
        </ListItem>
        <ListItem component="a" button href="#experience">
          <WorkIcon /> <span className={classes.linkText}>Experience</span>
        </ListItem>
        <ListItem component="a" button href="#education">
          <SchoolIcon /> <span className={classes.linkText}>Education</span>
        </ListItem>
        <ListItem component="a" button href="#other">
          <SportsKabaddiIcon /> <span className={classes.linkText}>Other Interests</span>
        </ListItem>
      </List>
    </div>
  );

}
