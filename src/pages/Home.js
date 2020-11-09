import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import BackgroundImage from '../assets/fotodion.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 40,
    border: '2px solid rgba(255, 255, 255, 1)',
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    fontSize: 20,
    color: '#fff',

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    } 
  }
}))

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={() => { window.location.hash = '/cv' }}>CV Dion</Button>
    </div>
  )
}