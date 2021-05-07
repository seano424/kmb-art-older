import React from "react";
import Link from "next/link";
import Image from "next/image";

const maxContent = {
  width: "max-content",
};

export default function Navbar() {
  return (
    <section className="flex md:px-12 items-center mb-10 mt-8">
      <h1
        style={{ height: "6rem", width: "100%" }}
        className="relative w-3/5 h-24"
      >
        <Image
          src="/images/full-signature.png"
          alt="Karrie Marie Baxley Website Logo"
          layout="fill"
          objectFit="contain"
        />
      </h1>

      <div
        // style={{ top: "1rem", right: "3rem" }}
        className="relative w-full hidden md:flex md:pr-28 xl:pr-0 md:h-20 items-center justify-end"
      >
        <Link href="/paintings" passHref>
          <div className=" hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Paintings
            </a>
          </div>
        </Link>
        <Link href="/paintings" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Ink Works
            </a>
          </div>
        </Link>
        <Link href="/paintings" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Charcoals
            </a>
          </div>
        </Link>
        <Link href="/paintings" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Blog
            </a>
          </div>
        </Link>
        <Link href="/dancing-with-a-thousand-bees" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Book
            </a>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              About
            </a>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="hover:bg-red-300 cursor-pointer">
            <a
              style={maxContent}
              className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
            >
              Contact
            </a>
          </div>
        </Link>
      </div>
    </section>
  );
}
