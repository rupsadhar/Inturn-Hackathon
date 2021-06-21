import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
//import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import Email from '../Email/Email'
import Notes from '../Notes/Notes'
import Company from '../Company/Company'
//import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Otpplatform from '../otp/Otpplatform';
import qrcode from '../qr/qrcode'
// import Admin from '../admin/Admin'

const Routes = props => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/otp" component={Otpplatform} />
        <PrivateRoute exact path="/email" component={Email} />
        <PrivateRoute exact path="/notes" component={Notes} />
        <PrivateRoute exact path="/company" component={Company} />
        <PrivateRoute exact path="/otpqr" component={qrcode} />
      </Switch>
    </section>
  );
};

export default Routes;
