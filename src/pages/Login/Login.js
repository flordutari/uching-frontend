import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import Button from '../../components/Button/Button.js';
import ErrorComponent from '../../components/ErrorComponent';
import './Login.css';
import image from '../../assets/images/kingdom-log-in.png';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: {},
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await this.props.login({ email, password })
        } catch (error) {
            this.setState({
                email: '',
                password: '',
                error
            })
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <section className="overflow-hidden overflow-y-hidden uch-Main-public">
                <div className="mx-2">
                    <img src={image} alt="login"/>
                </div>
                <h4 className="mb-4 text-xl">Login to continue!</h4>
                <form className="auth-form" onSubmit={this.handleFormSubmit}>
                    <input
                        className="w-full p-2 my-2 border rounded uch-Input"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input
                        className="w-full p-2 my-2 border rounded uch-Input"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    {error.message ?  <ErrorComponent error={error} /> : null}
                    <div className="mt-40 text-center">
                        <Button element="button" type="submit" text="Login"/>
                        <Link to="/signup">or Signup</Link>        
                    </div>
                </form>
            </section>
        )
    }
}

export default withAuth(Login);
