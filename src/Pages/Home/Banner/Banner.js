import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= "https://i.ibb.co/VWT42ZD/10894.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Time accountability</h3>
            <p>I will make sure you learn everything on time.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/8m2zt4X/couple-husband-wife-are-holding-hands-pray-together-wooden-table-with-copy-space-your-text.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Caring</h3>
            <p>I am one of the best and most caring teaching you will ever find.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/rkxxHY3/5127314.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Will support you 24/7</h3>
            <p>
              Anytime you need me just sent me a message and I will assist you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;