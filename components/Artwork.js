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
    <div className="p-10 filter backdrop-blur-sm">
      {!open ? (
        <div className="grid grid-cols-1 sm:gap-16 xl:grid-cols-2">
          {artwork.map((a, idx) => (
            <div key={uuidv4()} className="flex flex-col gap-2">
              <div
                key={uuidv4()}
                onClick={() => handleLightbox(idx)}
                className="relative h-[500px] w-full cursor-pointer lg:h-[750px]"
              >
                <Image
                  className="object-cover lg:object-contain"
                  src={imageBuilder(a.artworkImage).url() ?? '/'}
                  alt={a.caption}
                  layout="fill"
                />
              </div>
              <p className="m-auto w-8/12 text-center">
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
