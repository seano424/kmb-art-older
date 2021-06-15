import { useState } from 'react'
import { urlFor } from '../lib/sanity'
import Img from 'next/image'
import PostTitle from '@/components/post-title'
import Lightbox from 'react-image-lightbox'

export default function ImagesDisplay({ series }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [open, toggleOpen] = useState(false)

  const artWork = series?.results?.map((r) => r.artWork)
  const title = series?.results[0]?.title
  const images = artWork[0]?.map((a) => a.artworkImage)

  const handleContext = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const firstImage = artWork[0][0]

  const artDisplay = series ? (
    <>
      {artWork[0] && (
        <div
          onContextMenu={handleContext}
          key={firstImage._key}
          className="lg:mt-10 mx-10 lg:mx-0 mb-20 lg:mb-40"
        >
          <div
            onClick={() => toggleOpen(!open)}
            className="relative lg:w-5/5 h-full"
          >
            {firstImage.artworkImage && (
              <Img
                src={urlFor(firstImage.artworkImage).url()}
                alt={firstImage.caption}
                layout="responsive"
                width={1000}
                height={1000}
                objectFit="contain"
                quality={100}
                priority={true}
              />
            )}
          </div>
          <p className="italic py-2 text-lg opacity-70 text-center shadow-small">
            {firstImage.caption}
          </p>
        </div>
      )}
      {artWork[0]?.slice(1, artWork[0].length).map((art) => (
        <div
          onContextMenu={handleContext}
          key={art._key}
          className="lg:mt-10 mx-10 lg:mx-0 mb-20 lg:mb-40"
        >
          <div
            onClick={() => toggleOpen(!open)}
            className="relative lg:w-5/5 h-full"
          >
            {art.artworkImage && (
              <Img
                src={urlFor(art.artworkImage).url()}
                alt={art.caption}
                layout="responsive"
                width={1000}
                height={1000}
                objectFit="contain"
                quality={100}
              />
            )}
          </div>
          <p className="italic py-2 text-lg opacity-70 text-center shadow-small">
            {art.caption}
          </p>
        </div>
      ))}
    </>
  ) : (
    <h1>No artwork has been added to this exhibit so far...</h1>
  )

  return (
    <div className="mx-5 lg:mx-40">
      <PostTitle>{title}</PostTitle>
      {open ? (
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
      ) : (
        artDisplay
      )}
    </div>
  )
}

// src={urlFor(art.artworkImage).url()}
