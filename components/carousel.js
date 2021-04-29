import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./carouselItem";

import React from "react";

export default function LeadCarousel({ images, handleCaptionChange }) {
  const imageElement = images.slice(1).map((i) => {
    return <CarouselItem key={i} image={i} />;
  });

  const handleChange = (e) => {
    handleCaptionChange(images[e].caption);
  };

  return (
    <div>
      {/* <Carousel>
        <div>
          <img src="https://images.unsplash.com/photo-1515309025403-4b0184873cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel> */}
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
        <CarouselItem image={images[0]} />
        {imageElement}
      </Carousel>
    </div>
  );
}
