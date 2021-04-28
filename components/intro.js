import { CMS_NAME, CMS_URL } from "../lib/constants";
import Navbar from "../components/navbar";
import Image from "next/image";
import Carousel from "./carousel";

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
  const currentImages = allImages.filter((i) => i.image !== undefined);

  return (
    <>
      <Navbar />
      <section className="relative flex-col md:flex-row flex items-center md:justify-between h-full">
        <Carousel images={currentImages} />
      </section>
    </>
  );
}
