import React from "react";
import Link from "next/link";
import Image from "next/image";

const maxContent = {
  width: "max-content",
};

export default function Navbar() {
  return (
    <section className="flex md:px-12 items-center">
      <h1 className="w-full pr-56 pl-8 md:pl-16 md:pr-0 sm:block md:hidden xl:block text-center md:h-40">
        <Image
          src="/images/full-signature.png"
          alt="Karrie Marie Baxley Website Logo"
          width={800}
          height={200}
          quality={100}
        />
      </h1>

      <div className="w-full hidden md:flex md:pr-28 xl:pr-0 md:h-20 items-center justify-end">
        <Link href="/">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            ABOUT
          </a>
        </Link>
        <Link href="/paintings">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            PAINTINGS
          </a>
        </Link>
        <Link href="/charcoals">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            CHARCOALS
          </a>
        </Link>
        <Link href="/ink-works">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            INK WORKS
          </a>
        </Link>
        <Link href="/">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            EXHIBITIONS
          </a>
        </Link>
        <Link href="/">
          <a
            style={maxContent}
            className="lg:w-max mx-2 lg:mx-6 hover:text-primary text-xs"
          >
            BOOK
          </a>
        </Link>
      </div>
    </section>
  );
}
