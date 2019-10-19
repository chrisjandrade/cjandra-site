import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    marginBottom: '50vh'
  },
  record: {
    marginBottom: 10
  }
}));

const educations = [
  { 
    title: 'Master of Science',
    area: 'Computer Science',
    when: '2012',
    school: 'George Mason University',
    office: 'Volgenau School Of Engineering'
  },
  {
    title: 'Graduate Certificate in Web Based Software Engineering',
    area: 'Software Engineering',
    when: '2012',
    school: 'George Mason University',
    office: 'Volgenau School Of Engineering'
  },
  {
    title: 'Bachelor of Science',
    area: 'Computer Science',
    when: '2006',
    school: 'George Mason University',
    office: 'Volgenau School Of Engineering'
  }
];

export function Education() {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <a name="education"><br/><br/></a>
      <Card>
        <CardContent>
          <Typography variant="h5">Education</Typography>
          { educations.map((record, idx) => (
            <Box key={ idx } display="flex" className={classes.record}>
              <Box flexGrow={1}>
                <Typography variant="h6">{record.title}</Typography>
                <Typography variant="subtitle1">{record.school}</Typography>
                <em>{record.office}</em>
              </Box>
              <Box flexGrow={1}>
                <Typography align="right">{record.area}</Typography>
                <Typography component="p" align="right" variant="caption">{record.when}</Typography>
              </Box>
            </Box>
          )) }
        </CardContent>
      </Card>
    </Container>
  );
}