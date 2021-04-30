import React, { useState } from "react";
import { urlFor } from "../lib/sanity";

export default function TailwindCarousel({ images }) {
  const [show, setShow] = useState(3);

  const divStyle = {
    height: "400px",
  };

  const imageStyle = {
    objectFit: "cover",
    objectPosition: "top",
    height: "400px",
  };

  const carouselImage = (
    <>
      <img
        className={`carousel-images w-full transition-opacity duration-1000 ease-in-out ${
          show !== 0 ? "opacity-0" : "opacity-100"
        }`}
        style={imageStyle}
        src={urlFor(images[0]?.image).url()}
        alt="hello"
      />
      <img
        className={`carousel-images carousel-image-1 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 1 ? "opacity-0" : "opacity-100"
        }`}
        style={imageStyle}
        src={urlFor(images[1]?.image).url()}
        alt="hello"
      />
      <img
        className={`carousel-images carousel-image-2 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 2 ? "opacity-0" : "opacity-100"
        }`}
        style={imageStyle}
        src={urlFor(images[2]?.image).url()}
        alt="hello"
      />
      <img
        className={`carousel-images carousel-image-3 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 3 ? "opacity-0" : "opacity-100"
        }`}
        style={imageStyle}
        src={urlFor(images[3]?.image).url()}
        alt="hello"
      />
      <img
        className={`carousel-images carousel-image-4 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 4 ? "opacity-0" : "opacity-100"
        }`}
        style={imageStyle}
        src={urlFor(images[4]?.image).url()}
        alt="hello"
      />
    </>
  );

  setTimeout(() => {
    const num = show > images.length - 2 ? 0 : show + 1;
    // const num = show < 2 ? show + 1 : 0;
    setShow(num);
  }, 8000);

  return (
    <div style={divStyle} className="bg-indigo-100 mb-20 px-40">
      {carouselImage}
    </div>
  );
}
