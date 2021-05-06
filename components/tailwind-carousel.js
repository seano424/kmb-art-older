import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import Image from "next/image";

export default function TailwindCarousel({ images, handleCaptionChange }) {
  const [show, setShow] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      let num = show > images.length - 2 ? 0 : show + 1;
      setShow(num);
    }, 8000);
    return () => {
      handleCaptionChange(images[show].caption);
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
    <div className="relative cursor-pointer h-full">
      <Image
        className={`carousel-images w-full transition-opacity duration-500 ease-in-out ${
          show !== 0 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[0]?.image).url()}
        alt={images[0]?.content}
        layout="fill"
      />
      <Image
        className={`carousel-images carousel-image-1 w-full transition-opacity duration-500 ease-in-out ${
          show !== 1 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[1]?.image).url()}
        alt={images[1]?.content}
        layout="fill"
      />
      <Image
        className={`carousel-images carousel-image-2 w-full transition-opacity duration-500 ease-in-out ${
          show !== 2 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[2]?.image).url()}
        alt={images[2]?.content}
        layout="fill"
      />
      <Image
        className={`carousel-images carousel-image-3 w-full transition-opacity duration-500 ease-in-out ${
          show !== 3 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[3]?.image).url()}
        alt={images[3]?.content}
        layout="fill"
      />
      <Image
        className={`carousel-images carousel-image-4 w-full transition-opacity duration-500 ease-in-out ${
          show !== 4 ? "opacity-0" : "opacity-100"
        }`}
        src={urlFor(images[4]?.image).url()}
        alt={images[4]?.content}
        layout="fill"
      />
    </div>
  );

  return (
    <div style={{ height: "500px" }} className="mb-8 md:px-20 w-screen">
      {/* <FaArrowLeft
        onClick={moveLeft}
        className="ml-20 hidden md:block cursor-pointer arrows left opacity-25 hover:opacity-75 transition-opacity duration-500 ease-in-out"
      /> */}
      <Link href="/paintings">
        <a>{carouselImage}</a>
      </Link>
      {/* <FaArrowRight
        onClick={moveRight}
        className="mr-20 hidden md:block cursor-pointer arrows right opacity-25 hover:opacity-75 transition-opacity duration-500 ease-in-out"
      /> */}
    </div>
  );
}
