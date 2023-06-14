import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
  
      initialSlide: 0,
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
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
          <div>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6483290f356b9b55a85dd0c9/BANNER_1557050805365.jpg"
              alt="image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
