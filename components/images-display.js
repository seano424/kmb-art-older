import React from "react";
import { urlFor } from "../lib/sanity";
import Img from "next/image";

export default function ImagesDisplay({ series }) {
  const artWork = series?.results?.map((r) => r.artWork);
  const title = series?.results[0]?.title;
  const artDisplay = series ? (
    artWork[0]?.map((art) => (
      <div key={art._key} className="mt-10 h-screen mb-40">
        <div className="relative w-5/5 h-full">
          {art.artworkImage && (
            <Img
              src={urlFor(art.artworkImage).url()}
              alt={art.caption}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          )}
        </div>
        <p className="italic text-sm mt-5 ml-48">{art.caption}</p>
      </div>
    ))
  ) : (
    <h1>No artwork has been added to this exhibit so far...</h1>
  );

  return (
    <div className="">
      <h1 className="text-2xl mt-10 shadow opacity-25">{title}</h1>
      {artDisplay}
    </div>
  );
}

// src={urlFor(art.artworkImage).url()}
