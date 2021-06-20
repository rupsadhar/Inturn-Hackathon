import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase';

function handleClick({user: phone}){
    console.log("hello");
    console.log(phone)
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    let number = "+919000065663";
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        let code = prompt("Enter your OTP");
        if(code == null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, 'user');
            document.getElementById('verify').textContent = "User verified";
          })
          .catch((error) => {
            console.log(error);
            document.getElementById('verify').textContent = "Incorrect OTP";
          })
      })
  }

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div id="recaptcha"></div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Get otp
      </Button>
      <label id="verify"> 
      </label>
    </div>
  );
}
