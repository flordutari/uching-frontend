import React, { Component } from 'react';
import Button from '../components/Button/Button.js';
import Article from '../components/Article/Article.js';
import articleOne from '../assets/images/kingdom-1431.png';
import articleTwo from '../assets/images/kingdom-business-chart-overlook.png';
import articleThree from '../assets/images/kingdom-money.png';

export default class LandingPage extends Component {
    render() {
        return (
            <section className="uch-Main-public">
                <div className="uch-Overline"></div>
                <h2 className="text-4xl font-bold">Why Uch?</h2>
                <p className="my-8 mr-10 text-2xl">To help you know what your expenses are, being able to control them and improving your projects planification.</p>
                <div className="mt-16">
                    <Button element="link" href='/welcome' text="Get started"/>
                </div>
                <section>
                    <Article 
                        image={articleOne} 
                        number="01" 
                        title="Register" 
                        paragraph="Write down your expenses to make sure they are under control."
                    />
                    <Article 
                        image={articleTwo} 
                        number="02" 
                        title="Analize" 
                        paragraph="Read the statistics to have a more complex knowledge about your usual expenses."
                    />
                    <Article 
                        image={articleThree} 
                        number="03" 
                        title="Plan" 
                        paragraph="Make great projects with your money."
                    />
                </section>
            </section>
        )
    }
}
