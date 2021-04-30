import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { urlFor } from "../lib/sanity";

export default function CarouselItem({ image }) {
  return (
    <div className="carousel-wrapper relative h-full" key={uuidv4()}>
      <img
        className="carousel-image"
        layout="fill"
        objectposition="top"
        objectfit="cover"
        src={urlFor(image.image).url()}
        alt={image.caption}
        quality={100}
      />
    </div>
  );
}
