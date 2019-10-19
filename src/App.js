import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import 'typeface-roboto';
import 'typeface-anton';
import 'typeface-open-sans';

import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import About from './components/sections/about';
import Experience from './components/sections/experience';
import { Education } from './components/sections/education';
import Other from './components/sections/other';


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#394b59',
      alternateTextColor: 'rgb(255, 255, 255)',
    },
    secondary: blueGrey,
    typography: {
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    }
    
  }
});

const useStyles = makeStyles(theme => ({
  root: {},
  toTop: {
    position: 'fixed',
    right: 20,
    bottom: 60
  },
  app: {
    backgroundColor: 'rgba(250, 250, 250, 0.7)'
  },
  banner: {
    backgroundImage: 'url(assets/ocean-city.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30% 10%',
    height: 300
  },
  bottomSpacer: {
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}));

function App() {
  const [ navDisplayed, setNavDisplayed ] = useState(false),
    classes = useStyles();

  return (
    <ThemeProvider theme={ theme }>
      <div className={ classes.app }>
        <Header onNavToggle={ () => setNavDisplayed(!navDisplayed) }/>
        <div className={classes.banner} />
        <Drawer
          variant="persistent"
          anchor="left"
          open={ navDisplayed }>
          
          <Navigation onNavToggle={ () => setNavDisplayed(!navDisplayed) }/>
        </Drawer>

        <About/>
        <Experience/>
        <Education/>
        <Other/>
        <div className={ classes.bottomSpacer}/>
        <Fab href="#about" className={ classes.toTop }><KeyboardArrowUpIcon/></Fab>
      </div>
    </ThemeProvider>
  );
}

export default App;
