import React, { Component } from 'react';
import Modal from '../../components/Modal';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import MonthBar from './MonthBar/MonthBar';
import readImage from '../../assets/images/kingdom-1431.png';
import graphicImage from '../../assets/images/kingdom-1431.png';
import otherImage from '../../assets/images/kingdom-1122.png';
import otraImage from '../../assets/images/kingdom-1431.png';
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
                <section className="uch-Carousel">
                    <CarouselCard title="Read" image={readImage} alt="read"/>
                    <CarouselCard title="Graphic" image={graphicImage} alt="graphic"/>
                    <CarouselCard title="Other" image={otherImage} alt="graphic" />
                    <CarouselCard title="Otra" image={otraImage} alt="graphic" />
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
                    <MonthBar month="J"/>
                    <MonthBar month="F"/>
                    <MonthBar month="M"/>
                    <MonthBar month="A"/>
                    <MonthBar month="M"/>
                    <MonthBar month="J"/>
                    <MonthBar month="J"/>
                    <MonthBar month="A"/>
                    <MonthBar month="S"/>
                    <MonthBar month="O"/>
                    <MonthBar month="N"/>
                    <MonthBar month="D"/>
                </section>
                <Modal />
            </main>
        )
    }
}
