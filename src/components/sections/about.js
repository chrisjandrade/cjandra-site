import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  core: {},
  container: {
    marginTop: 30,
    marginBottom: '20vh'
  },
  name: {
    fontWeight: 'bold'
  },
  profileImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    borderRadius: '50%',
    border: '10px solid #fff',
    boxShadow: '10px 10px 66px -23px rgba(0,0,0,0.75)',
    MozBoxShadow: '10px 10px 66px -23px rgba(0,0,0,0.75)',
    WebkitBoxShadow: '10px 10px 66px -23px rgba(0,0,0,0.75)'
  },
  skillList: {
    fontSize: '12px'
  },
  pullRight: {
    float: 'right',
    clear: 'both'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container}>
      <a name="about"><br/><br/></a>      
      <img src="assets/profile-image.jpeg" alt="Profile" className={ classes.profileImage }></img>
      <Typography align="center" variant="h4" className={ classes.name } gutterBottom={true}>
        CHRISTOPHER J ANDRADE
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h5">
            Cleared <b>Software Engineer</b>
          </Typography>
          <Typography gutterBottom={true}>
            I am an experienced Software Engineer specialized in Web Development based 
            out of Northern Virginia.
            I work primarily with Javascript developing the user interface,
            but am able to work across the full development stack. I Also have
            experience leading teams, mentoring and I am a strong proponent
            of Agile Development Methodologies.
          </Typography>
          <br/>

          <Typography variant="h5" gutterBottom={true}>
            Selected Skills
          </Typography>
          <Box display="flex">
            <Box flexGrow={1}>
              &#x25B9; JavaScript (ES2015+) / TypeScript<br />
              &#x25B9; React<br />
              &#x25B9; Angular, AngularJS<br />
              &#x25B9; D3.js<br />
              &#x25B9; ExtJS, Backbone<br/>
            </Box>
            <Box flexGrow={1}>
              &#x25B9; Java<br />
              &#x25B9; C/C++<br />
              &#x25B9; C#<br />
              &#x25B9; Python<br />
              &#x25B9; Bash<br />
            </Box>
            <Box flexGrow={1}>
              &#x25B9; Docker<br />
              &#x25B9; PostgreSQL<br />
              &#x25B9; MySQL<br />
              &#x25B9; MariaDB<br />
              &#x25B9; HTML/<i>S</i>CSS<br />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}