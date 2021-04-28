import { CMS_NAME, CMS_URL } from "../lib/constants";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <Navbar />
      <section
        style={{ height: "65vh" }}
        className="relative flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12"
      >
        <Image
          src="/images/seahorses.jpg"
          alt="testing"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Karrie Marie Baxley
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A statically generated blog example using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href={CMS_URL}
            className="underline hover:text-success duration-200 transition-colors"
          >
            Sanity.io
          </a>
          .
        </h4>
      </section>
    </>
  );
}
