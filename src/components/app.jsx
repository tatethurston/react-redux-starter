import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../containers/connected-auth-route';
import ConnectedHome from '../containers/connected-home';
import ConnectedLogin from '../containers/connected-login';
import ConnectedRegister from '../containers/connected-register';
import ConnectedFlash from '../containers/connected-flash';
import NotFound from './not-found';

const App = () =>
  <div>
    <ConnectedFlash />
    <Switch>
      <AuthRoute exact path="/" component={ConnectedHome} />
      <Route exact path="/login" component={ConnectedLogin} />
      <Route exact path="/register" component={ConnectedRegister} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default App;
