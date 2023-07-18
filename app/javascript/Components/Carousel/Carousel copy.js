import React from "react";
import Slider from "react-slick";
// import "./index.css";

const Carousel = () => {
  var settings = {
    dots: true,
    // fade: true,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/200" alt="Kitten" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
