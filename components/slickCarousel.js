import React from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import { urlFor } from "../lib/sanity";

export default function SlickCarousel({ images }) {
  const carouselItems = images.slice(1).map((i) => {
    return (
      <div key={uuidv4()}>
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

  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{carouselItems}</Slider>;
}
