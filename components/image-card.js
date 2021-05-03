import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ image }) {
  return (
    <div
      className="m-20 shadow-medium p-10 relative w-4/5 h-screen"
      key={image._id}
    >
      <Link href={`/paintings/${image.slug.current}`}>
        <a>
          <Image
            src={urlFor(image?.featureImage).url()}
            alt="something"
            layout="fill"
            objectFit="cover"
          />
        </a>
      </Link>
    </div>
  );
}
