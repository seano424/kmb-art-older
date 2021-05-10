import { useEffect, useState } from "react";
import CoverImage from "./cover-image";
import PostBody from "./post-body";

export default function BookDisplay({ book }) {
  const [bookSideBack, setBookSideBack] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setBookSideBack(!bookSideBack);
    }, 12000);
    return () => {
      clearTimeout(timeout);
    };
  }, [bookSideBack]);

  const { front_image, back_image, _id, body } = book;
  return (
    <div key={_id} className="grid lg:grid-cols-2 gap-8">
      <div className="cursor-pointer">
        <a
          target="_blank"
          href="https://www.amazon.com/Dancing-Thousand-Bees-Karrie-Baxley-ebook/dp/B00NLQHHCY"
        >
          <CoverImage
            imageObject={bookSideBack ? front_image : back_image}
            title="Dancing with a thousand bees book"
            height={700}
            width={500}
            objectfit="contain"
          />
        </a>
      </div>
      <PostBody content={body} />
    </div>
  );
}
