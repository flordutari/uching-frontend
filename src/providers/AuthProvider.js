import React, { Component } from 'react'
import authService from '../lib/auth-service';
import Loader from '../components/Loader';

export const AuthContext = React.createContext(
  // authStore // default value
);

const { Provider, Consumer }  = AuthContext;

export const withAuth = (Comp) => {
    return class WithAuth extends Component {
        render() {
        return (
            <Consumer>
            {(authStore) => {
                return <Comp 
                isLogged={authStore.isLogged}
                user={authStore.user}
                setUser={authStore.setUser}
                logout={authStore.logout}
                login={authStore.login}
                signup={authStore.signup}
                {...this.props} />
            }}
            </Consumer>
        )
        }    
    }
}

export default class AuthProvider extends Component {
    state = {
        isLogged: false,
        user: {},
        status: 'loading'
    }

    setUser = (user) => {
        this.setState({
            isLogged: true,
            user,
        })
    }

    logoutUser = () => {
        return authService.logout()
        .then(() => {
            this.setState({ 
            isLogged: false,
            user: {},
            });
        })
        .catch(error =>  {
            return error.response.data
        })
    }

    loginUser = (body) => {
        return authService.login(body)
        .then((user) => {
            this.setUser(user);
        })
        .catch(error => error.response.data)
    }

    signupUser = (body) => {
        return authService.signup(body)
        .then((user) => {
            this.setUser(user);
        })
        .catch(error =>  error.response.data)
    }

    componentDidMount() {
        authService.me()
        .then((user) => {
            this.setState({
            isLogged: true,
            user,
            status: 'loaded'
            })
        })
        .catch((error) => {
            this.setState({ 
            isLogged: false,
            user: {},
            status: 'loaded'
            });
        })
    }

    render() {
        const { isLogged, user, status } = this.state;
        const { children } = this.props;
        switch (status) {
        case 'loading':
            return <Loader />
        default:
            return (
            <Provider value={
                { isLogged,
                setUser: this.setUser,
                user,
                logout: this.logoutUser, 
                login: this.loginUser,
                signup: this.signupUser,
                }}>
                {children}
            </Provider>    
            );
        }
    }
}
