import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainMobileNav from "./main-mobile-nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const maxContent = {
    width: "max-content",
  };

  return (
    <>
      <header className="flex md:px-12 items-center mb-10 mt-2 justify-around">
        <h1 style={{ height: "6rem" }} className="relative w-3/5 xl:w-5/5 h-24">
          <Image
            src="/images/full-signature.png"
            alt="Karrie Marie Baxley Website Logo"
            layout="fill"
            objectFit="contain"
          />
        </h1>

        <div
          // style={{ top: "1rem", right: "3rem" }}
          className="relative w-full hidden xl:flex md:pr-28 xl:pr-0 md:h-20 items-center justify-end"
        >
          <Link href="/paintings" passHref>
            <div
              style={{ width: "max-content" }}
              className=" hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Paintings
              </a>
            </div>
          </Link>
          <Link href="/paintings" passHref>
            <div
              style={{ width: "max-content" }}
              className="hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Ink Works
              </a>
            </div>
          </Link>
          <Link href="/paintings" passHref>
            <div
              style={{ width: "max-content" }}
              className="hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Charcoals
              </a>
            </div>
          </Link>
          <Link href="/paintings" passHref>
            <div
              style={{ width: "max-content" }}
              className="hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Blog
              </a>
            </div>
          </Link>
          <Link href="/dancing-with-a-thousand-bees" passHref>
            <div
              style={{ width: "max-content" }}
              className="hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Book
              </a>
            </div>
          </Link>
          <Link href="/" passHref>
            <div
              style={{ width: "max-content" }}
              className="hover:bg-red-300 w-max cursor-pointer"
            >
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                About
              </a>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="hover:bg-red-300 w-max cursor-pointer">
              <a
                style={maxContent}
                className="lg:w-max mx-2 md:mx-4 text-xs uppercase font-normal tracking-widest"
              >
                Contact
              </a>
            </div>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="xl:hidden cursor-pointer flex flex-col justify-center"
        >
          <div
            className={`w-8 h-1 bg-blue-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open ? `transform rotate-45` : `transform rotate-0 mt-1`
            }`}
          />
          <div
            className={`w-8 h-1 bg-blue-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open
                ? `transform translate-x-5 opacity-0`
                : `transform translate-x-0 opacity-100 mt-1 `
            }`}
          />
          <div
            className={`w-8 h-1 bg-blue-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open ? `transform -rotate-45 -mt-2` : `transform rotate-0 mt-1 `
            }`}
          />
        </div>
      </header>
      <section
        style={{ top: "100px" }}
        className={`absolute z-10 bg-white h-0 w-full transition-all duration-200 ease-linear ${
          open ? `h-full visible opacity-100 w-full` : `opacity-0`
        }`}
      >
        <MainMobileNav />
      </section>
    </>
  );
}
