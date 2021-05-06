import React from "react";
import Link from "next/link";
import Image from "next/image";

const maxContent = {
  width: "max-content",
};

export default function Navbar() {
  return (
    <section className="flex md:px-12 items-center mx-32 mb-4 mt-1">
      <h1 className="relative h-28 w-full">
        <Image
          src="/images/full-signature.png"
          alt="Karrie Marie Baxley Website Logo"
          layout="fill"
          objectFit="contain"
        />
      </h1>

      <div className="w-full hidden md:flex md:pr-28 xl:pr-0 md:h-20 items-center justify-end">
        <Link href="/paintings">
          <a style={maxContent} className="lg:w-max mx-2 md:mx-4 ">
            Artwork
          </a>
        </Link>
        <Link href="/paintings">
          <a style={maxContent} className="lg:w-max mx-2 md:mx-4 ">
            Blog
          </a>
        </Link>
        <Link href="/dancing-with-a-thousand-bees">
          <a style={maxContent} className="lg:w-max mx-2 md:mx-4 ">
            Book
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="lg:w-max mx-2 md:mx-4 ">
            About
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="lg:w-max mx-2 md:mx-4 ">
            Contact
          </a>
        </Link>
      </div>
    </section>
  );
}
