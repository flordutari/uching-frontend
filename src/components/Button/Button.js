import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button (props) {
    const classes = {
        button: 'uch-Button-primary w-full p-4 text-lg uppercase rounded inline-block text-center my-2'
    }
    if (props.element === 'button') {
        return (
            <button className={classes.button} type={props.type}>
                {props.text}
            </button>
        )
    } else if (props.element === 'link') {
        return (
            <Link className={classes.button} to={props.href}>
                {props.text}
            </Link>
        )
    }
};
