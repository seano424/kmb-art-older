import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarLayout({ children }) {
  const { open, toggleOpen } = useContext(NavContext);
  const { pathname } = useRouter();
  return (
    <>
      <div
        className={`transition-opacity duration-500 ease-in-out absolute lg:fixed z-20 bg-white shadow-md lg:pl-12 flex min-h-screen top-28 lg:pr-12 lg:mt-0 lg:top-0 md:overflow-x-hidden flex-col lg:w-72 flex-shrink-0 ${
          open
            ? "w-full text-center opacity-100 lg:text-left"
            : "w-0 opacity-0 lg:opacity-100"
        }`}
      >
        <Link href="/">
          <a onClick={toggleOpen}>
            <h2
              style={{ textDecorationColor: "blanchedalmond" }}
              className="text-6xl leading-none my-8 hover:underline cursor-pointer"
            >
              Karrie Marie Baxley
            </h2>
          </a>
        </Link>
        <Link href="/paintings">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/paintings" && "bg-design-yellow"
            }`}
          >
            Paintings
          </a>
        </Link>
        <Link href="/ink-works">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/ink-works" && "bg-design-yellow"
            }`}
          >
            Ink Works
          </a>
        </Link>
        <Link href="/charcoals">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/charcoals" && "bg-design-yellow"
            }`}
          >
            Charcoals
          </a>
        </Link>
        <Link href="/dancing-with-a-thousand-bees">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/book" && "bg-design-yellow"
            }`}
          >
            Book
          </a>
        </Link>
        <Link href="#">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/about" && "bg-design-yellow"
            }`}
          >
            About
          </a>
        </Link>
        <Link href="#">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/contact" && "bg-design-yellow"
            }`}
          >
            Contact
          </a>
        </Link>
        <Link href="/blog">
          <a
            onClick={toggleOpen}
            className={`${
              open ? "text-5xl md:text-3xl lg:text-base" : "text-base"
            } ml-1 font-light mb-1 hover:bg-design-yellow ${
              pathname === "/about" && "bg-design-yellow"
            }`}
          >
            Blog
          </a>
        </Link>
      </div>
      <div className="lg:ml-72">{children}</div>
    </>
  );
}
