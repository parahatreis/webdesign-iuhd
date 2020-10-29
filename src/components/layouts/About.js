import React from 'react';
import Navbar from './Navbar';


const About = () => {
   return (
      <div>
         <Navbar aboutPage={true} />
         <div className="container">
            About
         </div>
      </div>
   )
}

export default About
