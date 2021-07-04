import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CarouselImages from './carousel-images'

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

  const carouselImage = (
    <div className="cursor-pointer h-96 flex justify-center">
      <CarouselImages images={images} show={show} />
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
