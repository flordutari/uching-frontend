import React from 'react';
import './Article.css';

export default function Article (props) {
    return (
        <article className="mt-12">
            <div className="mx-2">
                <img src={props.image} alt="register"/>
            </div>
            <span className="text-4xl uch-Number-span">{props.number}. </span>
            <span className="text-2xl font-bold">{props.title}</span>
            <p className="mt-2 mr-2 text-xl">{props.paragraph}</p>
        </article>
    )
};
