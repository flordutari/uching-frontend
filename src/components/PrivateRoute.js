import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import Navbar from './Navbar/Navbar';

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => {
        if (isLogged) {
          return <><Navbar {...props}/><Component {...props} /></>
        } else {
          return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
      }}
    />
  )
}

export default withAuth(PrivateRoute);