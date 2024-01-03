import React from 'react';

import './Card.css';

export interface Card {
    children?: any
    title: string
    description: string
    buttonDescription: string 
}

export default function Card(props: Card) {
  return (
    <div className='card-wrapper'>
        {props.children}
        <div className='card'>
            <h2 className='card-title'>{props.title}</h2>
            <p className='carb-description'>{props.description}</p>
            <button className='carb-button'>{props.buttonDescription}</button>
        </div>
    </div>
  )
}
