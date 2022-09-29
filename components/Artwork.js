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
    <div className="py-5 filter backdrop-blur-sm pr-10">
      {!open ? (
        <div className="flex flex-wrap justify-center gap-20">
          {artwork.map((a, idx) => (
            <div
              key={uuidv4()}
              onClick={() => handleLightbox(idx)}
              className="relative h-[500px] w-[400px] cursor-pointer lg:h-[800px] lg:w-full"
            >
              <Image
                className='object-contain'
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
