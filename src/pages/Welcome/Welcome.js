import React, { Component } from 'react';
import Button from '../../components/Button/Button.js';
import image from '../../assets/images/kingdom-1060.png';

export default class LandingPage extends Component {
    render() {
        return (
            <section className="uch-Main-public">
                <div className="uch-Overline"></div>
                <h2 className="text-4xl font-bold">Keep your expenses under control.<br/>Make plans.</h2>
                <div className="mx-2 my-10">
                    <img src={image} alt="man-thinking"/>
                </div>
                <div className="mt-16">
                    <Button element="link" href='/signup' text="Create Account"/>
                    <Button element="link" href='/login' text="Login"/>
                </div>
            </section>
        )
    }
}
