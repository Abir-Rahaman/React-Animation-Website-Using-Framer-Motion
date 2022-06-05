import React from 'react';
import '../Styles/Card.scss'

const Card = ({logo,title}) => {
    return (
        <div className='card'>
            <div className="logo">{logo}</div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            
        </div>
    );
};

export default Card;