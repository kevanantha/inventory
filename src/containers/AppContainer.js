import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Dashboard from '../components/layout/Dashboard';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={ Dashboard } />
              <Route path='/signin' component={ SignIn } />
              <Route path='/signup' component={ SignUp } />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default AppContainer
