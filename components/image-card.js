import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ image, title }) {
  return (
    <div className="relative border-8 border-gray-200">
      <Link href={`/${image.category}/${image.slug.current}`} passHref>
        <div className="cursor-pointer">
          <a className="">
            <Image
              className="rounded-sm shadow-xl"
              src={urlFor(image?.featureImage).url()}
              alt="something"
              width="400"
              height="400"
              priority={true}
            />
          </a>
          <div className="flex justify-between">
            <p className="caption-header italic text-sm text-black text-md leading-relaxed tracking-wider">
              <span className="opacity-50 px-1">series:</span> {title}
            </p>
            {/* <FaExternalLinkAlt /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
