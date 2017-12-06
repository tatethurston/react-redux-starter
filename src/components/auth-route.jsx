import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthRoute extends Route {
  render() {
    if (this.props.isAuthenticated) {
      return <this.props.component />
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default AuthRoute;
