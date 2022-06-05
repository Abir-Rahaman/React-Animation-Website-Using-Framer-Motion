import React from 'react'
import banner from '../Assets/coffee-banner.png'
import { Button } from '../components/Button'
import '../Styles/Starter.scss'
import {GoPlay} from 'react-icons/go'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Navbar from '../components/Navbar'
function Starter() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
        <div className="container">
          <div className="content">
            <h1>Natural Coffee For You & Feel The Refreshment</h1>
            <p>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample</p>
            <div className="button-container">
              <Button content="Watch Video" icon={<GoPlay></GoPlay>} ></Button>
              <Button content="Order" icon=  {<HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>} ></Button>
            </div>
        </div>
        <div className="image">
            <img src={banner} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Starter