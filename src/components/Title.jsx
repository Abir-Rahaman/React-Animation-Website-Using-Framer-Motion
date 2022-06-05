import React from 'react';
import '../Styles/Title.scss';


const Title = ({title , color , lineCenter=false}) => {
    return (
        <div className={`title ${lineCenter === true ? "center" : ""}`}>
            <h2>{title}</h2>
            <div className={`${color}`}>
                <span></span>

            </div>
            
        </div>
    );
};

export default Title;