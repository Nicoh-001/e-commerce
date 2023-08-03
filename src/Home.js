import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import t1 from './img/t1.jpg';
import t2 from './img/t2.jpg';
import t4 from './img/t4.jpg';
import tt2 from './img/tt2.jpg';
import tt1 from './img/tt1.webp';

const Homes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: t1,
      text: 'Hardwood',
      color: 'bg-primary',
    },
    {
      src: t2,
      text: 'timber(pine, cypress, blue-gum)',
      color: 'bg-success',
    },
    {
      src: t4,
      text: 'Plywood',
      color: 'bg-danger',
    },
    {
      src: tt1,
      text: 'Decent Furnitures',
      color: 'bg-warning',
    },
    {
      src: tt2,
      text: 'Quality products',
      color: 'bg-info',
    },
  ];

  useEffect(() => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const carouselInterval = setInterval(handleNext, 7000);

    return () => clearInterval(carouselInterval);
  }, [images.length]);

  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-12 col-md-8 mx-auto">
          <Carousel
            activeIndex={currentIndex}
            prevLabel={<FaChevronLeft />}
            nextLabel={<FaChevronRight />}
            interval={null}
            prevIcon={<FaChevronLeft className="carousel-control-icon" />}
            nextIcon={<FaChevronRight className="carousel-control-icon" />}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-container">
                  <img src={image.src} className="carousel-image" alt={`Slide ${index + 1}`} />
                </div>
                <Carousel.Caption className={`carousel-caption ${image.color}`}>
                  <h3>{image.text}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homes;
