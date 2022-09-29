import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Btn() {
  return (
    <button className="focus:outline-none uppercase text-lg transition duration-500 ease-in-out bg-blue-300 hover:bg-blue-200 rounded-b w-full">
      <span className="flex items-center justify-center transform hover:scale-125 transition duration-500 ease-in-out w-full h-full py-3">
        See more
        <span className="pl-1">
          <HiOutlineArrowNarrowRight />
        </span>
      </span>
    </button>
  );
}
