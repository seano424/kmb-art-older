import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./carouselItem";
import { v4 as uuidv4 } from "uuid";
import { urlFor } from "../lib/sanity";

import React from "react";

export default function LeadCarousel({ images, handleCaptionChange }) {
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
        verticalSwipe="natural"
        axis="horizontal"
      >
        <div key={uuidv4()}>
          <img
            layout="fill"
            objectposition="top"
            objectfit="cover"
            src="/images/seahorses.jpg"
            alt={images[0].caption}
            quality={100}
          />
        </div>
      </Carousel>
    </div>
  );
}

// {urlFor(images[0].image).url()}
