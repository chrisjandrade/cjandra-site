import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Typography, Box } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    marginBottom: '30vh'
  },
  company: {
    letterSpacing: 2
  },
  title: {
    textAlign: 'right',
    fontWeight: 200,
    fontSize: '13px'
  },
  description: { marginBottom: 10 },
  card: { marginBottom: 12 },
  dates: { textAlign: 'right' },
  chip: {
    marginRight: 4
  }
}));

const experiences = [
  {
    company: 'Technology Management Associates',
    title: 'Senior Software Engineer',
    description: (
      <Box>
        <b>Kings Canyon</b><br/>
        &#x25B9; Routinely hold technical brown bag discussions on Java Script.<br />
        &#x25B9; Key contributer to the effort to revitalize the UI with angular.<br />
        &#x25B9; Introduced jasmine unit testing into UI.<br/>
        &#x25B9; Developed protractor e2e infrastructure for the UI..<br /><br />

        <b>Hyperledger Topology Prototype</b><br/>
        &#x25B9; Developed visualization for the Silkwave/JICD3.2 Hyperledger Research Project.<br/><br/>

        <b>2018 Intern Project - <i>HR Portal</i></b><br/>
        &#x25B9; Held brown bag discussion on Docker.<br />
        &#x25B9; Set up the Jenkins CICD pipe.<br />
        &#x25B9; Dockerized the Application<br />
        &#x25B9; Hardened the application, developed the search capability and other features.<br />

      </Box>
    ),
    from: 'Aug 2018',
    to: 'Present',
    skills: [
      'JavaScript', 'Angular', 'Java', 'Docker', 'PostgreSQL', 'Bash', 'Python', 'D3.js'
    ]
  },
  {
    company: 'Blue Ridge Dynamics',
    title: 'Senior Software Engineer',
    description: (
      <Box>
        <Typography gutterBottom={true}>
          I worked as key developer for a start up company that supported various Government and Commercial projects.
        </Typography>
        <b>Anvil</b><br />
        &#x25B9; Consulted with partner to develop user interface for application used for scheduling
        signal communication resources.<br/><br/>
        <b>DARPA</b><br/>
        &#x25B9; Supported various DARPA research efforts by providing the
        user interface and visualizations.<br />
        &#x25B9; Developed the Blue Lake project, which is used for cataloging collected enemy media,
        and running a suite of machine learning tools for analyzing and extracting metadata.<br/><br/>
        <b>Zeta</b><br/>
        &#x25B9; Developed user interface for signal communication application.
        <b>Other</b><br/>
        &#x25B9; Started the technical book/brown bag discussion group.
      </Box>
    ),
    from: 'Oct 2016',
    to: 'Jul 2018',
    skills: [
      'JavaScript', 'React', 'Elastic Search', 'Node', 'Python', 'Docker', 'Backbone', 'Vue', 'MariaDB'
    ]
  },
  {
    company: 'Probity',
    title: 'Senior Software Engineer SME',
    description: (
      <Box>
        <Typography gutterBottom={true}>
          The primary engineer responsible for developer Acacia.  Acacia is a tool
          focused on analysing audio.
        </Typography>
        &#x25B9; Created a faster than realtime audio pipeline.<br/>
        &#x25B9; Created libraries to allow:<br/>
        &nbsp;&nbsp;&nbsp;&#x25B9; Sound Stretch (tempo adjustment without pitch distortion)<br/>
        &nbsp;&nbsp;&nbsp;&#x25B9; Dual-mono audio interleaving<br />
        &nbsp;&nbsp;&nbsp;&#x25B9; Independent channel muting<br />
        &nbsp;&nbsp;&nbsp;&#x25B9; Audio gain (volume adjustment)<br />
        &nbsp;&nbsp;&nbsp;&#x25B9; Audio waveform image generation<br/>
        &#x25B9; Integrate with VAD/VF (Voice Activity Detection and Voice Filtering)<br/><br/>
      </Box>
    ),
    from: 'Oct 2015',
    to: 'Oct 2016',
    skills: [
      'JavaScript', 'NodeJS', 'C#'
    ]
  },
  {
    company: 'Six3Systems',
    title: 'Senior Software Engineer/Lead Developer',
    description: (
      <Box>
        &#x25B9; Lead DCTC Bedrock-Tasking Team.<br/>
        &#x25B9; Developed pluggable architecture to support multi-application search.<br />
        &#x25B9; Developed Role-based access control for Taskers application.<br />
        &#x25B9; Introduced unit testing into the applications.<br />
      </Box>
    ),
    from: 'Jan 2014',
    to: 'Jan 2014',
    skills: [
      'AngularJS', 'Node', 'Coffeescript', 'Java', 'Elastic Search'
    ]
  },
  {
    company: 'IBM',
    title: 'Software Engineer/UI Architect',
    description: (
      <Box>
        &#x25B9; Acted as the UI lead, conducting code reviews, developing best practices and coding standards.<br />
        &#x25B9; Developed UI for the LATCH family of audio and multimedia forensic tools.  Creating advanced visualizations<br />
        of user and machine generated metadata.<br/>
        &#x25B9; Held many brown bag lunches on Java Script, and usability.<br />
      </Box>
    ),
    from: 'Jan 2019',
    to: 'Jan 2014',
    skills: [
      'ExtJS', 'Java', 'GWT', 'PostgreSQL'
    ]
  }
];

export default function Experience() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={ classes.container }>
      <a name="experience"></a><br /><br />
      <Typography variant="h5">Experience</Typography>
      { experiences.map(experience => 
        <Card key={experience.company} className={ classes.card }>
          <CardContent>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography variant="h6" className={ classes.company}>
                  {experience.company}
                </Typography>
              </Box>
              <Box flexGrow={1} className={classes.title}>
                <Typography>{experience.title}</Typography>
              </Box>
            </Box>
            <Box display="flex" className={classes.description}>
              {experience.description}
            </Box>
            <Box display="flex">
              <Box flexGrow={1}>
                { experience.skills.map(skill =>
                  <Chip label={ skill } key={skill} className={classes.chip}></Chip>
                )}
              </Box>
              <Box flexGrow={1} className={classes.dates}>
                <Typography variant="caption">
                  {experience.from} to {experience.to}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}