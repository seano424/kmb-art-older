import React, { useState, useEffect } from 'react'
import { urlFor } from '../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'

export default function TailwindCarousel({ images, handleCaptionChange }) {
  const [show, setShow] = useState(0)

  // useEffect(() => {
  //   let timeout = setTimeout(() => {
  //     let num = show > images.length - 2 ? 0 : show + 1
  //     setShow(num)
  //   }, 80000)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [show])

  useEffect(() => {
    handleCaptionChange(images[show].caption)
  }, [show])

  useEffect(() => {
    window.addEventListener('keydown', downHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [show])

  const downHandler = ({ key }) => {
    if (key === 'ArrowLeft') {
      show <= 0 ? setShow(images.length - 1) : setShow(show - 1)
    }
    if (key === 'ArrowRight') {
      show >= images.length - 1 ? setShow(0) : setShow(show + 1)
    }
  }

  const handleContext = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const carouselImage = (
    <div
      onContextMenu={handleContext}
      className="cursor-pointer h-96 flex justify-center"
    >
      <div className="absolute w-full lg:w-full xl:w-3/4">
        <Image
          onContextMenu={handleContext}
          className={`carousel-images transition-opacity duration-500 ease-in-out ${
            show !== 0 ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
          src={urlFor(images[0]?.image).url()}
          alt={images[0]?.caption}
          layout="responsive"
          width={10}
          height={4}
          priority={true}
        />
      </div>
      <div className="absolute w-full lg:w-full xl:w-3/4">
        <Image
          onContextMenu={handleContext}
          className={`carousel-images carousel-image-1 w-full transition-opacity duration-500 ease-in-out ${
            show !== 1 ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
          src={urlFor(images[1]?.image).url()}
          alt={images[1]?.caption}
          layout="responsive"
          width={10}
          height={4}
          priority={true}
        />
      </div>
      <div className="absolute w-full lg:w-full xl:w-3/4">
        <Image
          onContextMenu={handleContext}
          className={`carousel-images carousel-image-2 w-full transition-opacity duration-500 ease-in-out ${
            show !== 2 ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
          src={urlFor(images[2]?.image).url()}
          alt={images[2]?.caption}
          layout="responsive"
          width={10}
          height={4}
          priority={true}
        />
      </div>
      <div className="absolute w-full xl:w-3/4">
        <Image
          onContextMenu={handleContext}
          className={`carousel-images carousel-image-3 w-full transition-opacity duration-500 ease-in-out ${
            show !== 3 ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
          src={urlFor(images[3]?.image).url()}
          alt={images[3]?.caption}
          layout="responsive"
          width={10}
          height={4}
          priority={true}
        />
      </div>
      <div className="absolute w-full xl:w-3/4">
        <Image
          onContextMenu={handleContext}
          className={`carousel-images carousel-image-3 w-full transition-opacity duration-500 ease-in-out ${
            show !== 4 ? 'opacity-0 z-0' : 'opacity-100 z-10'
          }`}
          src={urlFor(images[4]?.image).url()}
          alt={images[4]?.caption}
          layout="responsive"
          width={10}
          height={4}
          priority={true}
        />
      </div>
    </div>
  )

  return (
    <div className={`md:px-10 bg-gray-50`}>
      <Link href="/paintings">
        <a aria-label="Link to the paintings series by Karrie Marie Baxley">
          {' '}
          {carouselImage}
        </a>
      </Link>
    </div>
  )
}
