import React, { Component } from 'react';
import Modal from '../../components/Modal';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import './Main.css';

const classes = {
    textLine: 'h-8 leading-8',
    textLineTitle: 'inline-block text-lg float-left',
    textLineNumber: 'inline-block text-xl font-bold float-right',
};

export default class Main extends Component {
    render() {
        return (
            <main className="overflow-hidden uch-Main-private">
                <section className="inline-flex uch-Carousel">
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                </section>
                <section className="mx-2 my-4 main-balance uch-Main-month">
                    <h4 className="mb-1 text-xl">October 2020</h4>
                    <div className="p-6 text-center rounded-lg shadow-md balance-card uch-Month-card">
                        <div className={classes.textLine}>
                            <p className={classes.textLineTitle}>Earned</p>
                            <p className="inline-block float-right text-xl font-bold uch-Bright-blue">1500€</p>
                        </div>
                        <div className={classes.textLine}>
                            <p className={classes.textLineTitle}>Spent</p>
                            <p className="inline-block float-right text-xl font-bold uch-Red">-400€</p>
                        </div>
                        <hr className="my-2"/>
                        <div className={classes.textLine}>
                            <p className={classes.textLineTitle}>ROI</p>
                            <p className="inline-block float-right text-xl font-bold uch-Orange">1100€</p>
                        </div>
                    </div>
                </section>
                <section className="mx-2 uch-Main-year">
                    <h4 className="mb-1 text-xl">My year</h4>
                    <div>
                        <div className="w-2 h-20">    
                            <p className="h-4 uch-Earned"></p>
                            <p className="h-4 uch-Spent"></p>
                            <p className="h-4 uch-ROI "></p>
                        </div>
                        <span>J</span>
                    </div>
                </section>
                <Modal />
            </main>
        )
    }
}
