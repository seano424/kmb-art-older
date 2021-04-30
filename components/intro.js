import { useState } from "react";
import Navbar from "../components/navbar";
import Carousel from "./carousel";
import SlickCarousel from "./slickCarousel";

export default function Intro({ images }) {
  const [caption, setCaption] = useState(images[0].mainImage.caption);

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

  const handleChange = (newCaption) => {
    setCaption(newCaption);
  };

  return (
    <>
      <Navbar />
      <section>
        <SlickCarousel images={currentImages} />
        {/* <Carousel images={currentImages} handleCaptionChange={handleChange} /> */}
      </section>
      <section className="caption py-12 flex items-center">
        <h1 className="pl-12 caption-header self-start ml-16 text-lg w-4/6 font-extrabold">
          <span className="text-salmon">A</span>
          <span className="">r</span>
          twork by Karrie Marie Baxley
        </h1>
        <h1 className="caption-header w-48 text-opacity-25 text-black text-xs">
          {caption ? caption : "Artwork by Karrie Marie Baxley"}
        </h1>
      </section>
    </>
  );
}

// Niki de Saint Phalle in her studio at Soisy, surrounded by Le Mangeur  d'Enfants, La Mariée sous l'Arbre, and Le Cheval et la Mariée. Photo: © Monique Jacot
