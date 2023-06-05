import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-image'></div>
      <div className='hero-content'>
        <h1>Joshua Toback</h1>
        <p>Voice Acting/Directing for Animation and Video Games</p>
        <center>
          <Link smooth spy to="demos">Demo</Link>
          <Link smooth spy to="contact">Contact</Link>
        </center>
      </div>
    </div>
  );
};

export default Hero;
