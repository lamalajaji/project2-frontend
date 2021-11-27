import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={1800}
        infiniteLoop={true}
        // width = {"50%"}
      >
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/AA5I6040.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/JFSX1232.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/04/1.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/1O5A8319.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/JFSX0033.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/JFSX0009.jpg" />
        </div>
        <div>
          <img src="https://www.yasminid.com/wp-content/uploads/2021/06/A17I2887.jpg" />
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
