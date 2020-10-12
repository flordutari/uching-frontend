import React from 'react';
import './App.css';
import './assets/main.css'
import { Switch } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage';
import Welcome from './pages/Welcome/Welcome';
import Main from './pages/Main/Main';
import AuthProvider from './providers/AuthProvider';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <AnonRoute exact path="/" component={ LandingPage } />
        <AnonRoute exact path="/welcome" component={ Welcome } />
        <AnonRoute exact path="/signup" component={ Signup } />
        <AnonRoute exact path="/login" component={ Login } />
        <PrivateRoute exact path="/my-accounts" component={ Main } />
      </Switch>
    </AuthProvider>
  );
}

export default App;
