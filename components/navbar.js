import React from "react";
import Link from "next/link";
import Image from "next/image";

const maxContent = {
  width: "max-content",
};

export default function Navbar() {
  return (
    <section className="flex px-12 items-center">
      <h1 className="w-full text-center pl-16 h-40">
        <Image
          src="/images/full-signature.png"
          alt="Karrie Marie Baxley Website Logo"
          width={800}
          height={200}
          quality={100}
        />
      </h1>

      <div className="w-full flex justify-end text-xs">
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            ABOUT
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            PAINTINGS
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            CHARCOALS
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            INK WORKS
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            EXHIBITIONS
          </a>
        </Link>
        <Link href="/">
          <a style={maxContent} className="w-max mx-6 hover:text-primary">
            BOOK
          </a>
        </Link>
      </div>
    </section>
  );
}
