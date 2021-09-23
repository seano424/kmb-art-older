import { useState } from 'react'
import { imageBuilder, urlFor } from '../lib/sanity'
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'

export default function Artwork({ artwork }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [open, toggleOpen] = useState(false)
  const images = artwork.map((a) => a.artworkImage)
  const handleContext = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleLightbox = (idx) => {
    setPhotoIndex(idx)
    toggleOpen(!open)
  }

  return (
    <>
      {!open ? (
        <div className="grid grid-cols-3 gap-12 bg-gray-100 bg-opacity-20">
          {artwork.map((a, idx) => (
            <div
              onClick={() => handleLightbox(idx)}
              className="hover:bg-gray-200 py-10 hover:bg-opacity-25 cursor-pointer"
            >
              <Image
                src={imageBuilder(a.artworkImage).url()}
                alt={a.caption}
                width={1000}
                height={1000}
                layout="responsive"
                objectFit="contain"
                priority={true}
              />
              <p className="w-8/12 my-4 m-auto text-center">
                {a.caption && a.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div onContextMenu={handleContext}>
          <Lightbox
            imagePadding="40"
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
        </div>
      )}
    </>
  )
}
