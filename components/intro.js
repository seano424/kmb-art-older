import { CMS_NAME, CMS_URL } from "../lib/constants";
import Navbar from "../components/navbar";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function Intro({ images }) {
  let allImages = [];
  images.map(
    (i) => (
      allImages.push({
        image: i.mainImage,
        caption: i.mainImage?.caption,
      }),
      allImages.push({
        image: i.secondImage,
        caption: i.secondImage?.caption,
      }),
      allImages.push({
        image: i.thirdImage,
        caption: i.thirdImage?.caption,
      }),
      allImages.push({
        image: i.fourthImage,
        caption: i.fourthImage?.caption,
      }),
      allImages.push({
        image: i.fifthImage,
        caption: i.fifthImage?.caption,
      })
    )
  );
  console.log(allImages);

  // src={imageBuilder(imageObject).width(1240).height(540).url()}

  const currentImages = allImages.filter((i) => i.image !== undefined);

  console.log(currentImages);

  const imageElement = currentImages.map((i) => (
    <Image
      height={200}
      width={200}
      src={urlFor(i.image).url()}
      alt={i.caption}
      key={i.caption}
    />
  ));

  // src={imageBuilder(imageObject).width(1240).height(540).url()}

  return (
    <>
      <Navbar />
      {imageElement}
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
      </section>
    </>
  );
}
