import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide1 from "../../images/Personas/Slide1.PNG";
import Slide2 from "../../images/Personas/Slide2.PNG";
import Slide3 from "../../images/Personas/Slide3.PNG";
import Slide4 from "../../images/Personas/Slide4.PNG";
import Slide5 from "../../images/Personas/Slide5.PNG";
import ERDia from '../../images/ER-dia.png';

function ImageCarousel() {
  
  return (
    <Carousel infiniteLoop={true} showArrows={true} useKeyboardArrows={true}>
      <div>
        <img src={Slide1} />
      </div>
      <div>
        <img src={Slide2} />
      </div>
      <div>
        <img src={Slide3} />
      </div>
      <div>
        <img src={Slide4} />
      </div>
      <div>
        <img src={Slide5} />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
