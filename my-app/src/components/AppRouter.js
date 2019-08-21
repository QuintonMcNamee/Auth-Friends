import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <div>
      <Route exact path='/' component='' />
      <Route path='/login' component={LoginForm} />
      <PrivateRoute exact path='/protected' component={PrivateRoute} />
    </div>
  )
}

export default AppRouter;
