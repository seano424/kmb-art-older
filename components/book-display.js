import React from "react";
import CoverImage from "./cover-image";
import PostBody from "./post-body";

export default function BookDisplay({ book }) {
  const { front_image, _id, body } = book;
  return (
    <div key={_id} className="grid grid-cols-2 gap-8">
      <div>
        <CoverImage
          imageObject={front_image}
          title="Dancing with a thousand bees book"
          height={700}
          width={500}
        />
      </div>
      <PostBody content={body} />
    </div>
  );
}
