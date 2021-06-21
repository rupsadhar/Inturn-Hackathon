
import Button from '@material-ui/core/Button';
import QrReader from 'react-qr-reader';
import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../firebase';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Image from '../../img/login.png';
import { Redirect } from 'react-router-dom';
let check=false;
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function handleScan(data){
    if (data) {
      document.getElementById('qr_result').textContent = "QR Content: " + data;
      if(data==="Rushabh is awesome" && check){
      document.getElementById('company');
      }
    }
  }
function handleError(err) {
    console.error(err);
  }
function handleClick(){
    console.log("hello");
    //console.log(phone)
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = "+918961523486";
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("Enter your OTP");
        if(code == null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, 'user');
            document.getElementById('verify').textContent = "User verified";
            check=true;
            
          })
          .catch((error) => {
            console.log(error);
            document.getElementById('verify').textContent = "Incorrect OTP";
          })
      })
  }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function ContainedButtons() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div id="recaptcha"></div>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Verify
        </Button>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="otp"
            name="OTPcode"
            autoComplete="email"

            autoFocus
          />
          
        <label id="verify"> 
        </label>
       <div>
       <QrReader
         delay={10}
         onError={handleError}
         onScan={handleScan}
         style={{ width: '100%' }}
       />
       <label id="qr_result"></label>
       {/* <div id="company">
       <Redirect to="/company" />
       </div> */}
       </div>
      </div>
    </Grid>
  </Grid>
  );
  return (
      <section>
    <div className={classes.root}>
        <div id="recaptcha"></div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Get otp
      </Button>
      <label id="verify"> 
      </label>
    </div>
       <div>
       <QrReader
         delay={300}
         onError={handleError}
         onScan={handleScan}
         style={{ width: '100%' }}
       />
       <label id="qr_result"></label>
       </div>
       </section>
  );
}
