import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
          <Carousel>
            <div className="banner">
              <img src="https://i.pinimg.com/originals/e3/34/56/e334569a847af62777d93b4bf408dfa2.jpg" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/17/e0/2d/17e02de49b0c9d500988844332477e4e.jpg" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/d2/f8/2d/d2f82d0334dd540302f654e8240715f3.jpg" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/27/c1/1d/27c11d150d130a6293eb3170d995ee2f.jpg" />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/96/6f/1a/966f1af2174947a942dae306d7273a43.jpg" />
              <p className="legend">Legend 5</p>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/aa/e0/f5/aae0f5a26a4fff4bd14f3454ca2cdd67.jpg" />
              <p className="legend">Legend 6</p>
              <div>
                <img src="https://i.pinimg.com/originals/c0/1e/c3/c01ec300613aa7464a7097bc37aa72fa.jpg" />
                <p className="legend">Legend 7</p>
              </div>
            </div>
          </Carousel>
        );
    }
};
export default DemoCarousel;
