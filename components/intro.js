import { useState } from 'react'
import styles from './carousel.module.css'
import Carousel from './Carousel'

export default function Intro({ images }) {
  const [caption, setCaption] = useState(images[0].mainImage.caption)
  let allImages = []
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
  )
  const currentImages = allImages.filter((i) => i.image !== undefined)

  const handleChange = (newCaption) => {
    setCaption(newCaption)
  }

  return (
    <>
      <div className={` ${styles.carousel} bg-gray-50 h-full`}>
        <Carousel images={currentImages} handleCaptionChange={handleChange} />
      </div>
      <section className="caption flex-col-reverse items-base -mt-40 sm:mt-0 md:-mt-4 lg:-mt-1 xl:-mt-20 py-10 px-20 lg:flex-row flex lg:items-center bg-gradient-to-r from-blue-50 via-blue-200 to-green-300">
        <h1 className="pr-2 md:pr-0 mt-2 lg:ml-16 caption-header self-start text-2xl italic lg:w-4/6 font-extrabold">
          <span className="text-salmon">A</span>
          <span className="">r</span>
          twork by Karrie Marie Baxley
        </h1>
        <h1 className="mr-16 md:mr-0 caption-header w-48 text-opacity-75 text-black">
          <span className="text-gray-700">Art Piece Title:</span>{' '}
          <span className="font-black">
            {caption ? caption : 'Artwork by Karrie Marie Baxley'}
          </span>
        </h1>
      </section>
    </>
  )
}
