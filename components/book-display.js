import { useEffect, useState } from "react";
import CoverImage from "./cover-image";
import PostBody from "./post-body";

export default function BookDisplay({ book }) {
  const [bookSideBack, setBookSideBack] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setBookSideBack(!bookSideBack);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [bookSideBack]);

  const handleStop = () => {};

  const { front_image, back_image, _id, body } = book;
  return (
    <div key={_id} className="grid grid-cols-2 gap-8">
      <div onMouseOver={handleStop}>
        <CoverImage
          imageObject={bookSideBack ? front_image : back_image}
          title="Dancing with a thousand bees book"
          height={700}
          width={500}
        />
      </div>
      <PostBody content={body} />
    </div>
  );
}
