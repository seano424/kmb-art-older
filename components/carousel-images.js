import React from 'react'
import { urlFor } from 'lib/sanity'
import Image from 'next/image'

export default function CarouselImages({ images, show }) {
  const handleContext = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <>
      {images.map((image, idx) => (
        <div className="absolute w-full lg:w-full xl:w-3/4">
          <Image
            onContextMenu={handleContext}
            className={`carousel-images transition-opacity duration-500 ease-in-out ${
              show !== idx ? 'opacity-0 z-0' : 'opacity-100 z-10'
            }`}
            src={urlFor(image?.image).url()}
            alt={image?.caption}
            layout="responsive"
            width={10}
            height={4}
            priority={true}
          />
        </div>
      ))}
    </>
  )
}
