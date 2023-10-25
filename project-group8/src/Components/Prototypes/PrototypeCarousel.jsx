import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function PrototypeCarousel({data}) {

    return (
        <Carousel infiniteLoop={true} showArrows={true} useKeyboardArrows={true}>
            {data.map((item) => {
                return (
                    <div>
                        <img src={item.img} alt={item.alt} />
                    </div>
                )
            })}
        </Carousel>
    );
}

export default PrototypeCarousel;
