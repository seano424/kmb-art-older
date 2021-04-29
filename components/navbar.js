import React from "react";
import Link from "next/link";

const maxContent = {
  width: "max-content",
};

export default function Navbar() {
  return (
    <section className="flex py-16 px-8">
      <h1 className="w-full ml-5">NAVBAR GOES HERE</h1>
      <div className="w-full flex justify-end">
        <Link href="/">
          <a style={maxContent} className="w-max mx-6">
            (about)
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6">
            (paintings)
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6">
            (charcoals)
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6">
            (ink works)
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6">
            (book)
          </a>
        </Link>
      </div>
    </section>
  );
}
