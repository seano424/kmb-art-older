import { useState } from 'react'
import styles from './carousel.module.css'
import Carousel from './Carousel'
import { urlFor } from 'lib/sanity'
import Image from 'next/image'

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
  const adjustedImages = allImages.filter((i) => i.image !== undefined)

  console.log(
    adjustedImages[Math.floor(Math.random() * (adjustedImages.length - 1))]
  )

  const currentImage =
    adjustedImages[Math.floor(Math.random() * (adjustedImages.length - 1))]

  const handleChange = (newCaption) => {
    setCaption(newCaption)
  }

  const handleContext = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div>
      {/* <section className="caption p-4 flex-col-reverse items-base shadow-md bg-gradient-to-r from-blue-50 via-blue-300 to-green-400">
        <div className="flex justify-center">
          <span className="text-5xl">Artwork by Karrie Marie Baxley</span>
          <span className="font-black">
            Currently viewing: {currentImage.caption}
          </span>
        </div>
      </section> */}
      <div className="bg-blue-400 w-full h-screen relative">
        <Image
          onContextMenu={handleContext}
          src={urlFor(currentImage.image).url()}
          alt={currentImage.caption}
          layout="fill"
          priority={true}
          objectFit="cover"
        />
      </div>
    </div>
  )
}
