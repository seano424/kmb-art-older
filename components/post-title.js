import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function PostTitle({ children }) {
  const { open, toggleOpen } = useContext(NavContext);

  return (
    <div className="flex justify-between uppercase font-bold text-2xl pt-10 shadow-small mb-10">
      <div
        onClick={toggleOpen}
        className="xl:hidden cursor-pointer flex flex-col justify-center"
      >
        <div
          className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
            open ? `transform rotate-45` : `transform rotate-0 mt-1`
          }`}
        />
        <div
          className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
            open
              ? `transform translate-x-5 opacity-0`
              : `transform translate-x-0 opacity-100 mt-1 `
          }`}
        />
        <div
          className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
            open ? `transform -rotate-45 -mt-2` : `transform rotate-0 mt-1 `
          }`}
        />
      </div>
      {children}
    </div>
  );
}
