import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';

import NoImage from '../../assets/firstAid.jpg';


import './Carousel.css';

const Carousel = () => {
  const sliderRef = useRef(null);
  const slides = [
    { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg', text: 'Canyon' },
    { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg', text: 'Desert' },
    { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg', text: 'Erosion' },
    { image: 'https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg', text: 'Shape' },
    { image: NoImage, text: 'Great Products' },
  ];

  const handlePrevSlide = () => {
    $('.slideshow-left .slider').slick('slickPrev');
  };

  const handleNextSlide = () => {
    $('.slideshow-right .slider').slick('slickNext');
  };

  useEffect(() => {
    const maxItems = slides.length;
    let dragging = false;
    let tracking;
    let rightTracking;

    const $slider = $('.slideshow .slider');
    const $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

    const rightItems = slides.map((slide) => (
      `<div class="item">
        <img src="${slide.image}" alt="${slide.text}" />
      </div>`
    ));
    const reverseItems = rightItems.reverse();
    $('.slider', $sliderRight).html(reverseItems.join(''));

    $slider.addClass('slideshow-left');
    const leftSlider = $('.slideshow-left').slick({
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      infinite: true,
      dots: true,
      speed: 1000,
      autoplay: true,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      if (currentSlide > nextSlide && nextSlide === 0 && currentSlide === maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', -1);
        $('.slideshow-text').slick('slickGoTo', maxItems);
      } else if (currentSlide < nextSlide && currentSlide === 0 && nextSlide === maxItems - 1) {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems);
        $('.slideshow-text').slick('slickGoTo', -1);
      } else {
        $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.slideshow-text').slick('slickGoTo', nextSlide);
      }
    }).on('mousewheel', function (event) {
      event.preventDefault();
      if (event.deltaX > 0 || event.deltaY < 0) {
        $(this).slick('slickNext');
      } else if (event.deltaX < 0 || event.deltaY > 0) {
        $(this).slick('slickPrev');
      }
    }).on('mousedown touchstart', function () {
      dragging = true;
      tracking = $('.slick-track', $slider).css('transform');
      tracking = parseInt(tracking.split(',')[5]);
      rightTracking = $('.slideshow-right .slick-track').css('transform');
      rightTracking = parseInt(rightTracking.split(',')[5]);
    })
    .on('mousemove touchmove', function () {
      if (dragging) {
        const newTracking = $('.slideshow-left .slick-track').css('transform');
        const newTrackingValue = parseInt(newTracking.split(',')[5]);
        const diffTracking = newTrackingValue - tracking;
        $('.slideshow-right .slick-track').css({ transform: `matrix(1, 0, 0, 1, 0, ${rightTracking - diffTracking})` });
      }
    })
    .on('mouseleave touchend mouseup', function () {
      dragging = false;
    });

    $('.slideshow-right .slider').slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 950,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      initialSlide: maxItems - 1,
    });

    $('.slideshow-text').slick({
      swipe: false,
      vertical: true,
      arrows: false,
      infinite: true,
      speed: 900,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    });

    // Cleanup function
    return () => {
      leftSlider.slick('unslick');
    };
  }, [slides]);

  return (
  <div className='carousel-container'>
    <div className="split-slideshow">
      <div className="slideshow">
        <div className="slider" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.image} alt={slide.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshow-text">
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            {slide.text}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Carousel;
