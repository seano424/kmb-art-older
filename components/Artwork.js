import { useState } from 'react'
import { imageBuilder, urlFor } from '../lib/sanity'
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'
import { v4 as uuidv4 } from 'uuid'

export default function Artwork({ artwork }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [open, toggleOpen] = useState(false)
  const images = artwork.map((a) => a.artworkImage)

  const handleLightbox = (idx) => {
    setPhotoIndex(idx)
    toggleOpen(!open)
  }

  return (
    <div className="border filter backdrop-blur-sm">
      {!open ? (
        <div className="flex flex-wrap justify-center gap-1 lg:gap-20 lg:pt-5">
          {artwork.map((a, idx) => (
            <div
              key={uuidv4()}
              onClick={() => handleLightbox(idx)}
              className="relative h-[500px] w-full cursor-pointer lg:h-[750px]"
            >
              <Image
                className="object-cover"
                src={imageBuilder(a.artworkImage).url() ?? '/'}
                alt={a.caption}
                layout="fill"
              />
              <p className="m-auto my-4 hidden w-8/12 text-center">
                {a.caption && a.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <Lightbox
          imagePadding="20"
          mainSrc={urlFor(images[photoIndex]).url()}
          nextSrc={urlFor(images[(photoIndex + 1) % images.length]).url()}
          prevSrc={urlFor(
            images[(photoIndex + images.length - 1) % images.length]
          ).url()}
          onCloseRequest={() => toggleOpen(!open)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}
