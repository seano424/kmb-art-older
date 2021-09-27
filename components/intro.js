import { useState } from 'react'
import styles from './carousel.module.css'
import Carousel from './carousel'

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
      <Carousel images={currentImages} handleCaptionChange={handleChange} />
    </>
  )
}
