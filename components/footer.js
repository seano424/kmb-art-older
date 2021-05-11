import Container from "./container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 mt-auto px-2 flex-1">
      <div className="flex w-3/5 lg:w-5/6 m-auto py-12 justify-between items-center">
        <a
          className="text-base hidden lg:flex"
          href="https://www.seanoreilly.me/"
          target="_blank"
        >
          Site created by Sean O'Reilly
        </a>
        <p className="lg:w-2/5">
          Copyright © 2021-2025 Karrie Marie Arts. All Rights Reserved. All
          images are copyrighted to their respective owners.
        </p>
        <div className="hidden lg:flex">
          <Image
            src="/images/full-initials.png"
            alt="Karrie Marie Baxley Website Logo"
            width={180}
            height={80}
            quality={100}
          />
        </div>
      </div>
    </footer>
  );
}
