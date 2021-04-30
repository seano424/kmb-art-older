import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./carouselItem";
import { v4 as uuidv4 } from "uuid";
import { urlFor } from "../lib/sanity";

import React from "react";

export default function LeadCarousel({ images, handleCaptionChange }) {
  const imageElement = images.map((i) => {
    return (
      <div className="carousel-wrapper relative h-full" key={uuidv4()}>
        <img
          className="carousel-image"
          layout="fill"
          objectposition="top"
          objectfit="cover"
          src={urlFor(i.image).url()}
          alt={i.caption}
          quality={100}
        />
      </div>
    );
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
        verticalSwipe="natural"
        axis="horizontal"
      >
        {imageElement}
      </Carousel>
    </div>
  );
}
