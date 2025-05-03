import React, { useState, useEffect, useRef, useContext } from 'react';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';
import './ImageCarousel.css'; 
import { Contxt } from '../../../ContextProvider';
import { useNavigate } from 'react-router-dom';

const ImageCarousel = () => {
  const {hmdt, loading}= useContext(Contxt);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  //const images = ['/images/hmdt/banners/fashions_banners.jpg', '/images/banners/homeappliances_banners.jpg', '/images/banners/ExampleCarouselImage.jpg'];
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? hmdt.banners.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hmdt.banners.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto-play every 5s
    return () => clearInterval(interval);
  }, []);
  if(loading) return <div>Loading</div>
  else {return (
    <div className="carousel-container" {...swipeHandlers}>
      <div className="carousel-wrapper">
        {/* Arrows */}
        <button className="arrow left-arrow" onClick={goToPrevious}>
          ❮
        </button>
        <button className="arrow right-arrow" onClick={goToNext}>
          ❯
        </button>

        {/* Slides */}
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {hmdt.banners.map((src, index) => (
              <img key={index} src={src.imageURL} alt={`Slide ${index}`} className="carousel-image" 
                onClick={()=>{
                  navigate(`/products?category=${encodeURIComponent(src.category)}`)
                }}
              />
            ))
          }
        </div>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {hmdt.banners.map((_, index) => (
          <span
            key={index}
            className={classNames('dot', { active: index === currentIndex })}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};}

export default ImageCarousel;