import { v4 as uuidv4 } from "uuid";

import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function CarouselItem({ image }) {
  return (
    <div className="carousel-wrapper relative h-full" key={uuidv4()}>
      <Image
        className="carousel-image sm:mx-10"
        layout="fill"
        objectPosition="top"
        objectFit="none"
        src={urlFor(image.image).url()}
        alt={image.caption}
        quality={100}
      />
    </div>
  );
}
