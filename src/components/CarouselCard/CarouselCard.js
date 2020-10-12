import React, { Component } from 'react';
import './CarouselCard.css';

export default class CarouselCard extends Component {
    render() {
        return (
            <div className="inline-block w-32 h-32 my-1 ml-2 mr-3 text-center rounded-lg uch-Carousel-card">
                <img className="block h-20 mx-auto mt-2" src={this.props.image} alt={this.props.alt} />
                <h4 className="mb-1 text-lg">{this.props.title}</h4>              
            </div>
        )
    }
};
