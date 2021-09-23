import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { urlFor } from 'lib/sanity'
import Image from 'next/image'

export default function Carousel({ images, handleCaptionChange }) {
  const [show, setShow] = useState(0)

  useEffect(() => {
    let timeout = setTimeout(() => {
      let num = show > images.length - 2 ? 0 : show + 1
      setShow(num)
    }, 80000)
    return () => {
      clearTimeout(timeout)
    }
  }, [show])

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

  return (
    <Link href="/paintings">
      <a aria-label="Link to the paintings series by Karrie Marie Baxley">
        {' '}
        <div className="cursor-pointer h-[500px] relative">
          {/* <CarouselImages images={images} show={show} /> */}
          {images.map((image, idx) => (
            <Image
              className={`carousel-images transition-opacity duration-500 ease-in-out ${
                show !== idx ? 'opacity-0 z-0' : 'opacity-100 z-10'
              }`}
              src={urlFor(image?.image).url()}
              alt={image?.caption}
              layout="fill"
              priority={true}
            />
          ))}
        </div>
      </a>
    </Link>
  )
}
