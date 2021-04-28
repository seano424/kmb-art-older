import React from "react";
import Image from "next/image";

export default function Trial() {
  return (
    <div>
      <h1>Hello</h1>
      <Image
        src="/images/seahorses.jpg"
        layout="fill"
        alt="trial"
        objectFit="fill"
      />
    </div>
  );
}
