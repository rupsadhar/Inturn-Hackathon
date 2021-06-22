
import Button from '@material-ui/core/Button';
import QrReader from 'react-qr-reader';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
import Handleclick from '../otp/Handleclick';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
let check=false;
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
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
function handleScan(data,id){
    console.log(data);
    //console.log(user);
    if (data) {
      document.getElementById('qr_result').textContent = "QR Content: " + data;
      // if(data===user){
      
      if(data===id){
        document.getElementById('qrcode').style.visibility="hidden";
      document.getElementById('res').style.visibility="visible";
      }
      // }
      return data;
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

const Qrcode=({auth:{user}})=> {
  const classes = useStyles();
  console.log(user._id);
  const onSub = (e)=>{
    Handleclick(user.phone);
}
  const handleFirst =(data)=>{
    while(handleScan(data,user._id)===null){
    var x=handleScan(data,user._id);
    console.log("hello"+x)
    break;
    }
    
    if(x===user._id)
    {
      document.getElementById('result').style.visibility="visible";
    }
  }
  return (
    <div >
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
        <div id="otpqr">
        <div id="recaptcha-container"></div>
        <Button variant="contained" color="primary" onClick={onSub}>
          Verify
        </Button>
        <label id="sent"> 
        </label>
        </div>

       <div>
       <label id="verify"> 
        </label>
       <label id="qr_result"></label>
       <div id="res" className="otp">
        <Link to='/company' >
        <Button size="small" color="primary">
          Move to employee reocrds
        </Button>
        </Link>
        </div>
        <div id="qrcode">
       <QrReader
         delay={200}
         onError={handleError}
         onScan={handleFirst}
         style={{ width: '100%' }, {visibility:"hidden"}}
       ></QrReader>
       </div>
       {/* <div id="company">
       <Redirect to="/company" />
       </div> */}
       </div>
      </div>
    </Grid>
  </Grid>
  </div>
  );
  
}
Qrcode.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
 });

  export default connect(mapStateToProps)(
    Qrcode  );