import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SidebarLayout({ children }) {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      <div className="fixed pl-12 flex min-h-screen top-0 left-0 overflow-x-hidden flex-col w-56 flex-shrink-0">
        <Link href="/">
          <a>
            <h2
              style={{ textDecorationColor: "blanchedalmond" }}
              className="text-6xl leading-none my-8 hover:underline cursor-default"
            >
              Karrie Marie Baxley
            </h2>
          </a>
        </Link>
        <Link href="/paintings">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/paintings" && "bg-design-yellow"
            }`}
          >
            Paintings
          </a>
        </Link>
        <Link href="/ink-works">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/ink-works" && "bg-design-yellow"
            }`}
          >
            Ink Works
          </a>
        </Link>
        <Link href="/charcoals">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/charcoals" && "bg-design-yellow"
            }`}
          >
            Charcoals
          </a>
        </Link>
        <Link href="#">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/exhibitions" && "bg-design-yellow"
            }`}
          >
            Exhibitions
          </a>
        </Link>
        <Link href="#">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/book" && "bg-design-yellow"
            }`}
          >
            Book
          </a>
        </Link>
        <Link href="#">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/about" && "bg-design-yellow"
            }`}
          >
            About
          </a>
        </Link>
        <Link href="#">
          <a
            className={`text-base ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/contact" && "bg-design-yellow"
            }`}
          >
            Contact
          </a>
        </Link>
      </div>
      <div className="ml-56">{children}</div>
    </>
  );
}
