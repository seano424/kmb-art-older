import React from "react";
import { urlFor } from "../lib/sanity";

export default function TailwindCarousel({ images }) {
  const divStyle = {
    height: "400px",
  };

  const imageStyle = {
    objectFit: "cover",
    objectPosition: "top",
    height: "400px",
  };
  return (
    <div style={divStyle} className="bg-indigo-100 mb-20 px-40">
      <img
        className="w-full"
        style={imageStyle}
        src={urlFor(images[0].image).url()}
        alt="hello"
      />
    </div>
  );
}
