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
    <>
      {!open ? (
        <div className="flex flex-wrap justify-center gap-6 md:gap-12  bg-gray-100 bg-opacity-20">
          {artwork.map((a, idx) => (
            <div
              key={uuidv4()}
              onClick={() => handleLightbox(idx)}
              className="hover:bg-gray-200 py-10 hover:bg-opacity-25 cursor-pointer relative w-[100px] h-[100px] md:w-[500px] md:h-[500px]"
            >
              <Image
                src={imageBuilder(a.artworkImage).url()}
                alt={a.caption}
                layout="fill"
                // width={1000}
                // height={1000}
                // layout="responsive"
                objectFit="contain"
                // priority={true}
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
    </>
  )
}
