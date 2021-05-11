import { useState } from "react";
import { urlFor } from "../lib/sanity";
import Img from "next/image";
import PostTitle from "@/components/post-title";
import Lightbox from "react-image-lightbox";

export default function ImagesDisplay({ series }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, toggleOpen] = useState(false);

  const artWork = series?.results?.map((r) => r.artWork);
  const title = series?.results[0]?.title;
  const images = artWork[0].map((a) => a.artworkImage);

  const artDisplay = series ? (
    artWork[0]?.map((art) => (
      <div
        onContextMenu={(e) => e.preventDefault()}
        key={art._key}
        className="lg:mt-10 mx-10 lg:mx-0 h-96 xl:h-screen mb-20 lg:mb-40"
      >
        <div
          onClick={() => toggleOpen(!open)}
          className="relative lg:w-5/5 h-full"
        >
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
        <p className="italic py-2 text-lg opacity-70 text-center shadow-small">
          {art.caption}
        </p>
      </div>
    ))
  ) : (
    <h1>No artwork has been added to this exhibit so far...</h1>
  );

  return (
    <div className="mx-5 lg:mx-40">
      <PostTitle>{title}</PostTitle>
      {open ? (
        <Lightbox
          // {urlFor(art.artworkImage).url()}
          mainSrc={urlFor(images[photoIndex]).url()}
          nextSrc={urlFor(images[(photoIndex + 1) % images.length]).url()}
          prevSrc={urlFor(
            images[(photoIndex + images.length - 1) % images.length]
          ).url()}
          onCloseRequest={() => toggleOpen(!open)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      ) : (
        artDisplay
      )}
    </div>
  );
}

// src={urlFor(art.artworkImage).url()}
