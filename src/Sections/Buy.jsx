import React from 'react';
import '../Styles/Buy.scss'
import { Button } from '../components/Button';
import Title from '../components/Title';
import {GoPlay} from 'react-icons/go'

const Buy = () => {
    return (
        <div className='buy-container'>
            <div className="container">
                <div className="top">
                    <Title title='COFFEE MACHINE,BUY FOR HOME' lineCenter={true}></Title>
                   <div className="subtitle">
                       <p>
                       We have varying sizes of both types in Your home. For the best results try light roast coffees—with a full city roast being the darkest that you use. Lighter is best.
                       </p>
                   </div>
                </div>
                <div className="content">
                    <div className="">
                        <div className="video">
                            <GoPlay></GoPlay>
                        </div>
                    </div>
                    <div className="category">
                        <ul>
                            <li>Single-Serve Capsule Coffee Maker</li>
                            <li>French Press Coffee Maker</li>
                            <li>AeroPress Coffee Maker</li>
                            <li>Cold Brew Coffee Maker</li>
                            <li>Espresso Coffee Maker</li>
                            <li>Stovetop Coffee Maker</li>
                            <li>Turkish Coffee Maker (Ibrik)</li>
                            <li>Vietnamese Coffee Maker (Phin)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;