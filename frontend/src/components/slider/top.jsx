import React, { Component } from "react";
import Slider from "react-slick";
import "../slider/topSlider.css";
export default class CenterMode extends Component {
  render() {
    const settings = {
      // dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="pic-div" style={{ border: "12px solid black" }}>
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/642a7743c141202c7398bab5/BANNER_185772945459139.png"
              alt="pic 1"
            />
          </div>
          <div className="pic-div">
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/62ea10032a0381149fd8269f/BANNER_2293207196033742.png"
              alt="pic 2"
            />
          </div>
          <div className="pic-div">
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/64842e1a469bf95b655abad1/BANNER_264828214749611.jpg"
              alt="pic 3"
            />
          </div>
          <div className="pic-div">
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/648963788a902218088a186a/BANNER_316162730161978.jpeg"
              alt="pic 3"
            />
          </div>
          <div className="pic-div">
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6479d5e8514d861559829ecb/BANNER_15283274360980.jpg"
              alt="pic 3"
            />
          </div>
          <div className="pic-div">
            <img
              src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6479d5e8514d861559829ecb/BANNER_15283274360980.jpg"
              alt="pic 3"
            />
          </div>
          {/* Add more slide divs with pics */}
        </Slider>
      </div>
    );
  }
}
