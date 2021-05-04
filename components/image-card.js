import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ImageCard({ image }) {
  return (
    <div className="relative" key={image._id}>
      <Link href={`/${image.category}/${image.slug.current}`}>
        <div className="cursor-pointer">
          <a className="">
            <Image
              className="rounded-sm shadow-xl"
              src={urlFor(image?.featureImage).url()}
              alt="something"
              width="500"
              height="500"
            />
          </a>
          <div className="flex justify-between">
            <p className="caption-header w-48 text-opacity-25 text-black text-md leading-relaxed tracking-wider">
              {image.title}
            </p>
            {/* <FaExternalLinkAlt /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
