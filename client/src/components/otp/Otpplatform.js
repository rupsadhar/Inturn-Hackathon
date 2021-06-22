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
import handleclick from './Handleclick'
import { Link } from 'react-router-dom';
import Handleclick from './Handleclick';
//var check=false;

//console.log(check);
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




// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));
const Otpplatform= ({auth:{user}})=> {
  const classes = useStyles();
  //const [check, setText] = useState(false);
  console.log(user.phone);
  const onSub = (e)=>{
      Handleclick(user.phone);
  }
  //document.getElementById("result").style.visibility = "hidden";

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
          Email Sign in
        </Typography>
        <div>
          To access email we need to verify your Phone number!
        </div>
        <div id="recaptcha-container"></div>
        <Button variant="contained" color="primary" onClick={onSub}>
          Verify
        </Button>
        <label id="sent"> 
        </label>
        {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="otp"
            name="OTPcode"
            autoComplete="email"

            autoFocus
          /> */}
          
        <label id="verify"> 
        </label>
        <div id="result" className="otp">
        <Link to='/email' >
        <Button size="small" color="primary">
          Move to email
        </Button>
        </Link>
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

Otpplatform.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
 });

  export default connect(mapStateToProps)(
    Otpplatform  );

//export default Otpplatform 