import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./carouselItem";

import React from "react";

export default function LeadCarousel({ images, handleCaptionChange }) {
  const imageElement = images.map((i) => {
    return <CarouselItem key={i} image={i} />;
  });

  const handleChange = (e) => {
    handleCaptionChange(images[e].caption);
  };

  return (
    <div>
      <Carousel
        onChange={handleChange}
        interval={18000}
        transitionTime={1500}
        infiniteLoop
        stopOnHover
        useKeyboardArrows
        swipeable
        emulateTouch
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        autoFocus
      >
        {imageElement}
      </Carousel>
    </div>
  );
}
