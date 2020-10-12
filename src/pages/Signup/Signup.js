import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import image from '../../assets/images/kingdom-1427.png';
import ErrorComponent from '../../components/ErrorComponent';
import Button from '../../components/Button/Button.js';
import './Signup.css';

class Signup extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        error: {},
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { name, surname, email, password } = this.state;

        try {
            await this.props.signup({ name, surname, email, password })
        } catch (error) {
            this.setState({
                name: '',
                surname: '',
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
        const { name, surname, email, password, error } = this.state;
        return (
            <section className="overflow-hidden overflow-y-hidden uch-Main-public">
                <div className="mx-2">
                    <img src={image} alt="signup"/>
                </div>
                <h4 className="mb-4 text-xl">Sign up to get started!</h4>
                <form className="auth-form" onSubmit={this.handleFormSubmit}>
                    <input
                        className="w-full p-2 my-2 border rounded uch-Input"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input
                        className="w-full p-2 my-2 border rounded uch-Input"
                        type="text"
                        name="surname"
                        value={surname}
                        placeholder="Surname"
                        onChange={this.handleChange}
                    />
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
                    <div className="mt-12 text-center">
                        <Button element="button" type="submit" text="Create account"/>
                        <Link to="/login">Already have an account?</Link>        
                    </div>
                </form>
            </section>
        )
    }
}

export default withAuth(Signup);
