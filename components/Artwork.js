import { useState } from 'react'
import { imageBuilder, urlFor } from '../lib/sanity'
import Image from 'next/image'
import Lightbox from 'react-image-lightbox'
import { v4 as uuidv4 } from 'uuid'

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
    <div className="filter backdrop-blur-sm py-20">
      {!open ? (
        <div className="flex flex-wrap justify-center gap-10">
          {artwork.map((a, idx) => (
            <div
              key={uuidv4()}
              onClick={() => handleLightbox(idx)}
              className="cursor-pointer relative w-[400px] h-[500px] lg:w-[600px] lg:h-[700px]"
            >
              <Image
                src={imageBuilder(a.artworkImage).url() ?? '/'}
                alt={a.caption}
                layout="fill"
                objectFit="contain"
                priority
              />
              <p className="w-8/12 my-4 m-auto text-center hidden">
                {a.caption && a.caption}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div onContextMenu={handleContext}>
          <Lightbox
            imagePadding="100"
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
    </div>
  )
}
