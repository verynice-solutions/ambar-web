import React, { Component } from 'react';
import Slider from "react-slick";
import './slideshow.css'

class Slideshow extends Component {
  
  render() {

    let settings = {
      dots: true,
      draggable: false,
      infinite: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <div>        
        <Slider {...settings}>
          <div>
            {/* <h3>1</h3> */}
            <img alt="" className="carousel-img" src="https://gallery-wallpaper.com/wp-content/uploads/2018/02/wallpaper-of-a-dog-running-australian-shepherd-aussie-dog-running-mood-hd-wallpaper.jpg"/>
          </div>
          <div>
            <img alt="" className="carousel-img" src="https://www.corredorasparaperros.com/wp-content/uploads/2017/10/photo-boston-terrier-dog-running-hd-dogs-wallpapers.jpg" />
          </div>
          <div>
            <img alt="" className="carousel-img" src="https://i.pinimg.com/originals/3b/d9/9f/3bd99fc9e80a4a5cc995e136dbf342a3.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
