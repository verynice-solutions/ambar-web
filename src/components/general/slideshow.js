import React, { Component } from 'react';
import Slider from "react-slick";
import './slideshow.css'

class Slideshow extends Component {
  
  render() {

    let settings = {
      dots: true,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <div className='slider-spacing'>
        <Slider {...settings}>
          <div>
            {/* <h3>1</h3> */}
            <img alt="" className="carousel-img1" src="/collection1.png"/>
          </div>
          <div>
            <img alt="" className="carousel-img2" src="/meli_medalla2.png" />
          </div>
          <div>
            <img alt="" className="carousel-img3" src="/melissa-aretes.png"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
