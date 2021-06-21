import { makeStyles } from '@material-ui/core/styles';
import firebase from '../../firebase';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Image from '../../img/login.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
var check=false;
console.log(check);
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

function red(){
  console.log("in function");
  return(
    <Redirect to="/email" />
  );
}


function handleClick() {
    //console.log("hello");
    //console.log(phone);
    //var duration = 3000; 
//in milliseconds. therefore 3 seconds. 
//which may either late or early

    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    //document.getElementById('button-one').textContent="Click to get otp";
    let number = "+919000065663";
    //console.log(number);
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("Enter your OTP");
        if(code === null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, 'user');
            document.getElementById('verify').textContent = "User verified";
            //document.getElementById('emailpage');
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
const Otpplatform= (check)=> {
  const classes = useStyles();
  console.log(check);
  
  //console.log(user.phone);
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
        <div id="recaptcha-container"></div>
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
        console.log(check);
        <div >
          {check?
          <Redirect to="/email" />: <label></label>}
        
          </div>

       
      </div>
    </Grid>
  </Grid>
  );
  // return (
  //   <div className={classes.root}>
  //       <div id="recaptcha"></div>
        
  //     <Button variant="contained" color="primary" onClick={handleClick} id="button-one">
  //       Verify
  //     </Button>
  //     <label id="verify"> 
  //     </label>
  //   </div>
  // );
}

// Otpplatform.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(
//   Otpplatform
// );

export default Otpplatform 