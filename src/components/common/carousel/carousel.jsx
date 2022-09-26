import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselCommon = () => {
  return (
    <Carousel>
        <div>
            <h1 className="legend">Legend 1</h1>
        </div>
        <div>
            <h1 className="legend">Legend 2</h1>
        </div>
        <div>
            <h1 className="legend">Legend 3</h1>
        </div>
    </Carousel>
  )
}

export default CarouselCommon;