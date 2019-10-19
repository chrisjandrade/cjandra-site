import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { noop } from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  menuLink: {
    marginRight: 16,
    color: '#fff'
  },
  appTitle: {
    flexGrow: 1,
    color: '#ffffff'
  },
  logoText: { fontWeight: 'bold' },
  locationText: {
    display: 'inline-block',
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
    paddingLeft: 3,
    marginLeft: 8
  },
  iconLink: {
    color: '#ffffff',
    marginLeft: 4
  },
  resumeLink: {
    display: 'inline-block',
    padding: '4px 4px',
    border: '2px solid #fff',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: 3,
    marginLeft: 8
  }
}));

export default function Header({ onNavToggle = noop }) {

  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Tooltip title="Navigate">
          <Button className={classes.menuLink} onClick={ () => onNavToggle() }>
            <MenuIcon/>
          </Button>
        </Tooltip>
        
        <Typography className={ classes.appTitle }>
          www.<span className={ classes.logoText }>chrisandrade</span>.me
          <span className={ classes.locationText }>Centreville, VA ■ chrisjandrade AT gmail.com</span>
        </Typography>

        <Tooltip title="github">
          <a
            className={classes.iconLink}
            href="https://github.com/chrisjandrade"
            target="_blank"
            rel="noopener noreferrer">
              <GitHubIcon/>
          </a>
        </Tooltip>
        <Tooltip title="linkedin">
          <a
            className={classes.iconLink}
            href="https://www.linkedin.com/in/chrisjandrade/"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon/>
          </a>
        </Tooltip>

        <Tooltip title="my medium.com blog">
          <a
            className={ classes.iconLink }
            href="https://medium.com/chrisjandrade"
            target="_blank"
            rel="noopener noreferrer">
            <InsertCommentIcon/>
          </a>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
  

}