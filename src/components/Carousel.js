import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react';
import TypingText from './TypingText';

function HomeCarousel() {
  return (
    <Carousel className='carousel' >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="../carouselbanner1.svg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h2 className='carousel-h2'>Jump in your new lifestyle with <span className='carousel-h2-span'> Zheé Hub</span> !</h2>
          <h3 className='carousel-p'> We make it easier to <span className='typing'> </span></h3>
          {/*<TypingText></TypingText>*/} 
          <a className='carousel-btn' href="#about">Learn More</a>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../carouselbanner1.svg"
          alt="Second slide"
        />

        <Carousel.Caption className='carousel-caption'>
          <h2 className='carousel-h2'>Jump in your new lifestyle with <span className='carousel-h2-span'> Zheé Hub</span> !</h2>
          <h3 className='carousel-p'> We make it easier to <span className='typing'> </span></h3>
          {/*<TypingText></TypingText>*/} 
          <a className='carousel-btn' href="#about">Learn More</a>
        </Carousel.Caption>
      </Carousel.Item >

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../carouselbanner1.svg"
          alt="Third slide"
        />
        <Carousel.Caption className='carousel-caption'>
          <h2 className='carousel-h2'>Jump in your new lifestyle with <span className='carousel-h2-span'> Zheé Hub</span> !</h2>
          <h3 className='carousel-p'> We make it easier to <span className='typing'> </span></h3>
          {/*<TypingText></TypingText>*/} 
          <a className='carousel-btn' href="#about">Learn More</a>
      </Carousel.Caption>
      </Carousel.Item>
      
      
    
    </Carousel>
  );
}

export default HomeCarousel;