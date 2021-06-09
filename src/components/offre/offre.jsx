import React from 'react';
import './offre.style.css';

export const Offre = props => (
     <div className = 'offre-container'>
        <img alt="companies" src={`https://${props.companies.id}`}/>
            <h2> {props.companies.name}</h2>
            <p> {props.companies.description}</p>
    </div>
)