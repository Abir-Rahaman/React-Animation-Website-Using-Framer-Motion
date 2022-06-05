import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import '../Styles/Navbar.scss'
import Brandname from '../components/Brandname';
import { Button } from '../components/Button';

function Navbar(){
    const [toggle ,setToggle] = useState(false);
    const navToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className={`navbar ${toggle === true ? 'active' : ''}`}>
            <div className="col">
                <Brandname></Brandname>
                <div className="col-button">
                    {!toggle ? <GiHamburgerMenu onClick={navToggle}></GiHamburgerMenu> :<MdClose onClick={navToggle}></MdClose> }
                </div> 
            </div>
            <nav>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="">Service</a>
                        </li>
                        <li>
                            <a href="">Testimonial</a>
                        </li>
                        <li>
                            <a href=""> Blogs </a>
                        </li>
                        <li>
                            <Button content="Contact"></Button>
                        </li>
        
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;