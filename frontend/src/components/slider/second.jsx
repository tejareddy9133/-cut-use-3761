import React, { Component } from "react";
import Slider from "react-slick";
import "./second.css";
export default class Responsive2 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slider-item">
            <img
              src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230316213435814/3617057802500/1679140832368/resources/3617057802500.jpg"
              alt="pic"
            />
            <h5>Saah 2</h5>
            <h6>Sucha Yaar - Saah 2</h6>
          </div>
          <div className="slider-item">
            <img
              src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230316213435814/3617057802500/1679140832368/resources/3617057802500.jpg"
              alt="pic"
            />
            <h5>Saah 2</h5>
            <h6>Sucha Yaar - Saah 2</h6>
          </div>
          <div className="slider-item">
            <img
              src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230316213435814/3617057802500/1679140832368/resources/3617057802500.jpg"
              alt="pic"
            />
            <h5>Saah 2</h5>
            <h6>Sucha Yaar - Saah 2</h6>
          </div>
          <div className="slider-item">
            <img
              src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230316213435814/3617057802500/1679140832368/resources/3617057802500.jpg"
              alt="pic"
            />
            <h5>Saah 2</h5>
            <h6>Sucha Yaar - Saah 2</h6>
          </div>
          <div className="slider-item">
            <img
              src="https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230316213435814/3617057802500/1679140832368/resources/3617057802500.jpg"
              alt="pic"
            />
            <h5>Saah 2</h5>
            <h6>Sucha Yaar - Saah 2</h6>
          </div>
        </Slider>
      </div>
    );
  }
}
