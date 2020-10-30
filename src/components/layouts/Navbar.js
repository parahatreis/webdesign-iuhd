import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../sources/images/IUHD-LOGO-WHITE-01.png'

const Navbar = (props) => {
   return (
      <div className="container">
         <nav>
            <div className="logo">
               <img src={Logo} alt="logo" />
            </div>
            <ul>
               <li>
                  <Link to="/" style={{color : `${props.aboutPage ? 'black' : 'white'}` }} >Lectures</Link>
               </li>
               <li>
                  <Link to="/about" style={{color : `${props.aboutPage ? 'black' : 'white'}` }} >About</Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navbar
