import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
   return (
      <div className="container">
         <nav>
            <div className="logo">LOGO</div>
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
