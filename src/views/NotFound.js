import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'routes';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: '6rem',
  },
  text1: {
    margin: '4rem',
  },
  textBtn: {
    textDecoration: 'none',
    color: 'black',
  },
  divbtn: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem'
  },
  btn: {
    background: '#659c35',
    '&:hover': {
      background: '#b4e689'
    }
  },
}))

const NotFound = () => {

  const classes = useStyles()

  return (
    <Grid container className={classes.content}>
      <Typography variant='h3' align='center' className={classes.text}>ERROR 404</Typography>
      <Typography variant='h5' align='center' className={classes.text1}>Pagina no encontrada</Typography>
      <div className={classes.divbtn}>
        <Button className={classes.btn} variant="contained">
          <Link to={paths.home} className={classes.textBtn} >Regresar a Home</Link>
        </Button>
      </div>
      
    </Grid>
  )
}

export default NotFound
