import React from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/btn";
import { BsArrowUpRight } from "react-icons/bs";

export default function ImageCard({ image, title }) {
  return (
    <Link href={`/${image.category}/${image.slug.current}`} passHref>
      <div>
        <div className="relative border-8 border-gray-200">
          <div className="cursor-pointer w-96">
            <a>
              <Image
                className="rounded-sm shadow-xl"
                src={urlFor(image?.featureImage).url()}
                alt={`Gallery for ${image.title} by Karrie Marie Baxley`}
                layout="responsive"
                width={100}
                height={120}
                priority={true}
                objectFit="cover"
              />
            </a>
            <div className="flex items-center">
              <p className="caption-header italic text-sm text-black text-md leading-relaxed tracking-wider">
                <span className="opacity-50 px-1">series:</span> {title}
              </p>
              <span className="pl-1 text-gray-400 font-extrabold">
                {/* <BsArrowUpRight /> */}
              </span>
            </div>
          </div>
        </div>
        <Btn />
      </div>
    </Link>
  );
}
