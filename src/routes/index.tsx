import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} isPrivate />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
