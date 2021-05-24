import { useState } from "react";
import TailwindCarousel from "./tailwind-carousel";

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
      <TailwindCarousel
        images={currentImages}
        handleCaptionChange={handleChange}
      />
      {/* <Carousel images={currentImages} handleCaptionChange={handleChange} /> */}
      <section className="caption pl-12 pb-12 flex-col-reverse items-baselines lg:flex-row flex lg:items-center">
        <h1 className="pr-2 mt-6 md:pr-0 lg:ml-16 caption-header self-start text-lg lg:w-4/6 font-extrabold">
          <span className="text-salmon">A</span>
          <span className="">r</span>
          twork by Karrie Marie Baxley
        </h1>
        <h1 className="mr-16 md:mr-0 caption-header w-48 text-opacity-75 text-black text-xs">
          {caption ? caption : "Artwork by Karrie Marie Baxley"}
        </h1>
      </section>
    </>
  );
}

// Niki de Saint Phalle in her studio at Soisy, surrounded by Le Mangeur  d'Enfants, La Mariée sous l'Arbre, and Le Cheval et la Mariée. Photo: © Monique Jacot
