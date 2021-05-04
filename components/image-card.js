import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ image }) {
  console.log(image.title);
  return (
    <div className="relative" key={image._id}>
      <Link href={`/paintings/${image.slug.current}`}>
        <a className="">
          <Image
            className="rounded-sm shadow-xl"
            src={urlFor(image?.featureImage).url()}
            alt="something"
            width="500"
            height="500"
          />
        </a>
      </Link>
      <p className="caption-header w-48 text-opacity-25 text-black text-xs leading-relaxed tracking-wider">
        {image.title}
      </p>
    </div>
  );
}
