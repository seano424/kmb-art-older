import Container from "./container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex py-12 justify-between items-center">
          <a href="https://www.seanoreilly.me/" target="_blank">
            Site created by Sean O'Reilly
          </a>
          <p className="w-2/5">
            Copyright © 2021-2025 Karrie Marie Arts. All Rights Reserved. All
            images are copyrighted to their respective owners.
          </p>
          <Image
            src="/images/full-initials.png"
            alt="Karrie Marie Baxley Website Logo"
            width={100}
            height={50}
            quality={100}
          />
        </div>
      </Container>
    </footer>
  );
}

// <div className="py-4 flex flex-col lg:flex-row items-center">
//   <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
//     Site by Sean O'Reilly
//   </h3>
//   <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
//     <a
//       href="https://nextjs.org/docs/basic-features/pages"
//       className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
//     >
//       Read Documentation
//     </a>
//     <a
//       href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
//       className="mx-3 font-bold hover:underline"
//     >
//       View on GitHub
//     </a>
//   </div>
// </div>
