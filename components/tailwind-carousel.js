import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { urlFor } from "../lib/sanity";

export default function TailwindCarousel({ images }) {
  const [show, setShow] = useState(3);

  useEffect(() => {
    let timeout = setTimeout(() => {
      let num = show > images.length - 2 ? 0 : show + 1;
      setShow(num);
    }, 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [show]);

  const downHandler = ({ key }) => {
    if (key === "ArrowLeft") {
      show <= 0 ? setShow(images.length - 1) : setShow(show - 1);
    }
    if (key === "ArrowRight") {
      show >= images.length - 1 ? setShow(0) : setShow(show + 1);
    }
  };

  const moveLeft = () => {
    show <= 0 ? setShow(images.length - 1) : setShow(show - 1);
  };
  const moveRight = () => {
    show >= images.length - 1 ? setShow(0) : setShow(show + 1);
  };

  const carouselImage = (
    <>
      <img
        className={`carousel-images w-full transition-opacity duration-1000 ease-in-out ${
          show !== 0 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[0]?.image).url()}
        alt={images[0]?.content}
      />
      <img
        className={`carousel-images carousel-image-1 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 1 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[1]?.image).url()}
        alt={images[1]?.content}
      />
      <img
        className={`carousel-images carousel-image-2 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 2 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[2]?.image).url()}
        alt={images[2]?.content}
      />
      <img
        className={`carousel-images carousel-image-3 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 3 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[3]?.image).url()}
        alt={images[3]?.content}
      />
      <img
        className={`carousel-images carousel-image-4 w-full transition-opacity duration-1000 ease-in-out ${
          show !== 4 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[4]?.image).url()}
        alt={images[4]?.content}
      />
    </>
  );

  return (
    <div style={{ height: "400px" }} className="bg-indigo-100 mb-20 md:px-40">
      <FaArrowLeft
        onClick={moveLeft}
        className="hidden md:block cursor-pointer  arrows left opacity-25 hover:opacity-75 transition-opacity duration-100 ease-in-out"
      />
      {carouselImage}
      <FaArrowRight
        onClick={moveRight}
        className="hidden md:block cursor-pointer arrows right opacity-25 hover:opacity-75 transition-opacity duration-100 ease-in-out"
      />
    </div>
  );
}
