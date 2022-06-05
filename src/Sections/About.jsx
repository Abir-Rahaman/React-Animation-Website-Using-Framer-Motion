import React from 'react';
import { Button } from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';
import '../Styles/About.scss'
import '../Styles/Card.scss'
import {HiLightBulb} from 'react-icons/hi'
import {BsCalendarFill} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {SiGooglemessages} from 'react-icons/si'

const About = () => {
    return (
        <div className='about-container'>
            <div className="container">
                <div className="details">
                    <Title title='About Cffeain'></Title>
                    <p>This is a very casual and nice place for having coffee with friends or family and to hang out for a while, it's very relaxing to be there, the coffee here is very very good, to me they have the best coffee in town</p>
                    <p>a great coffee chain of dhaka. very trendy ambiance. great staff and friendly services. simply a lovely place to hang out.</p>
                    <Button content='Why Caffain?'> </Button>
                </div>
                <div className="cards">
                    <Card title="Innovative Coffee" logo={<HiLightBulb></HiLightBulb>}></Card>
                    <Card title="Production Planning" logo={<BsCalendarFill></BsCalendarFill>}></Card>
                    <Card title="Online Order" logo={<BiSupport></BiSupport>}></Card>
                    <Card title="24 Hours Open Delivery" logo={<SiGooglemessages></SiGooglemessages>}></Card>
                </div>
            </div>
            
        </div>
    );
};

export default About;