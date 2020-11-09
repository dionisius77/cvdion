import { Accordion, AccordionDetails, AccordionSummary, Avatar, Container, Fab, LinearProgress, makeStyles, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Foto from '../assets/fotodion.jpeg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from '../static_data/data';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: '#fff',
    flex: '70%',
  },
  kanan: {
    backgroundColor: ' rgb(122, 90, 209)',
    color: '#fff',
    flex: '30%'
  },
  rootGrid: {
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  foto: {
    height: 150,
    width: 150,
    marginLeft: 20,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nama: {
    paddingLeft: 10,
    flex: '65%',
    fontFamily: 'Rock Salt, cursive'
  },
  spacingTop: {
    height: 150
  },
  title: {
    marginBottom: 15,
    fontWeight: 700
  },
  content: {
    marginBottom: 20,
    marginTop: 20
  },
  wrapAccordion: {
    width: '100%'
  },
  headerAccordion: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '40.0%',
    flexShrink: 0,
  },
  secondaryHeaderAccordion: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: 'underline',
  },
  groupSkill: {
    marginTop: 10,
  },
  floatingButton: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  container: {
    margin: 10,
  },
  groupDetails: {
    display: 'flex',
  }
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    marginTop: 7,
    height: 8,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#fff',
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'rgb(163, 196, 159)',
  },
}))(LinearProgress);

function Cv() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div className={classes.rootGrid}>
      <div className={classes.kiri}>
        <div className={classes.top}>
          <Avatar alt="avatar dion" src={Foto} className={classes.foto} />
          <Typography variant="h4" component="h2" className={classes.nama}>
            Dionisius Aditya Octa N
            </Typography>
        </div>
        <Container>
          <div className={classes.content}>
            <Typography variant="h5" className={classes.title}>
              Profile
            </Typography>
            <Typography variant="body1">
              Passionate in Informatics Engineering with 5+ years, i am a fast learner developer which is can adapt with new programming language or new framework.
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant="h5" className={classes.title}>
              Employment History
            </Typography>
            <div className={classes.wrapAccordion}>
              {
                data.employmentHistory.map(
                  (item, index) =>
                    <Accordion expanded={expanded === `panel${index}`} key={index} onChange={handleExpand(`panel${index}`)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}bh-content`}
                        id={`panel${index}bh-header`}
                      >
                        <Typography className={classes.headerAccordion}>{item.title}</Typography>
                        <Typography className={classes.secondaryHeaderAccordion}>{item.period}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{item.description}</Typography>
                      </AccordionDetails>
                    </Accordion>
                )
              }
            </div>
          </div>
          <div className={classes.content}>
            <Typography variant="h5" className={classes.title}>
              Education
              </Typography>
            <Typography variant="h6">
              SMA Mardi Yuana Cianjur, IPA, Cianjur
              </Typography>
            <Typography className={classes.secondaryHeaderAccordion}>July 2009 - July 2012</Typography>
            <Typography variant="h6">
              UNIKOM, Informatics Engineering, Bandung
              </Typography>
            <Typography className={classes.secondaryHeaderAccordion}>July 2012 - July 2015</Typography>
          </div>
        </Container>
      </div>
      <div className={classes.kanan}>
        <Container style={{ marginTop: 20 }}>
          <div className={classes.content}>
            <Typography variant="h5">
              Details
            </Typography>
            <div className={classes.groupDetails}>
              <PhoneIcon />
              <Typography variant='body2'>+6285720021928</Typography>
            </div>
            <div className={classes.groupDetails}>
              <EmailIcon />
              <Typography variant='body2'>dionisius@gmail.com</Typography>
            </div>
          </div>
          <div className={classes.content}>
            <Typography variant="h5">
              Links
              </Typography>
            <div className={classes.link} onClick={() => { window.open('https://www.linkedin.com/in/dionisius-aditya-136774100') }}>LinkedIn</div>
            <div className={classes.link} onClick={() => { window.open('https://github.com/dionisius77') }}>GitHub</div>
          </div>
          <div className={classes.content}>
            <Typography variant="h5">
              Skills
              </Typography>
            {data.skills.map(
              (skill, index) =>
                <div className={classes.groupSkill} key={index}>
                  <Typography variant='body2'>{skill.name}</Typography>
                  <BorderLinearProgress variant='determinate' color='primary' value={skill.skill} />
                </div>
            )}
          </div>
        </Container>
      </div>
      <Fab color="primary" variant="extended" className={classes.floatingButton} onClick={() => { window.location.hash = '/home' }}>
        <ArrowBackIosIcon />
        Back to Home
      </Fab>
    </div>
  );
}

export default Cv;