import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang, faCode } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    marginBottom: 25
  }
}));

export default function Other() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <Card>
        <CardContent>
          <a name="other"><br/></a>
          <Typography variant="h5">Other</Typography>
          <Typography>
            <FontAwesomeIcon icon={faYinYang}/> I have a passion for <strong>martial arts</strong>, and have been involved in Chinese Martial Arts
            for over a decade.  I'm an active member of <a href="http://www.zongwumen.com" target="_blank"
              rel="noopener noreferrer">Zong Wu Men</a>, a Yizong Bagua group.
          </Typography>
          <Typography>
            <FontAwesomeIcon icon={faCode} /> I actually enjoy coding, and have an interest in Machine Learning specifically
            in regards to image analysis.  I try to do my best to keep up with the fast moving JavaScript community.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
