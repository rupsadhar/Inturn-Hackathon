import firebase from '../../firebase';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Handleclick(phone) {
    //console.log("hello");
    console.log(phone);
    //var duration = 3000; 
//in milliseconds. therefore 3 seconds. 
//which may either late or early
    
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    document.getElementById('sent').textContent = "OTP has been sent to your registered phone";
    //document.getElementById('button-one').textContent="Click to get otp";
    let number = phone;

    //console.log(number);
    firebase.auth().signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        
        let code = prompt("Enter your OTP");
        if(code === null) return;
        e.confirm(code)
          .then((result) => {
            console.log(result.user, 'user');
            document.getElementById('verify').textContent = "user verified";
            
            document.getElementById('result').style.visibility="visible";
            //document.getElementById('otpqr').style.visibility="hidden";
            //document.getElementById('qrcode').style.visibility="visible";
           
            //document.getElementById('emailpage').toggleAttribute()
            //return( <Redirect to="/email" />);
            //setText(true);

             
          })
          .catch((error) => {
            console.log(error);
            document.getElementById('verify').textContent = "Incorrect OTP";
          })
      })
  }
  
// Handleclick.propTypes = {
//     auth: PropTypes.object.isRequired
//   };
  
//   const mapStateToProps = (state) => ({
//     auth: state.auth,
//    });
  
//    export default connect(mapStateToProps)(
//    Handleclick
//      );

export default Handleclick