import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react';
import TypingText from './TypingText';

function HomeCarousel() {
  return (
    <div className='carousel' >
      <div>
      <video autoPlay loop type='video/mp4'  src="./video.mp4" style={{width:"100%"}}/>
        <div className='carousel-caption'>
          <h2 className='carousel-h2'>Jump in your new lifestyle with <span className='carousel-h2-span'> Zheé Hub</span> !</h2>
          <a className='carousel-btn' href="#about">Get Starte today! </a>
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;