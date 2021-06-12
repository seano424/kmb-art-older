import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Image from 'next/image'

export default function CoverImage({
  title,
  url,
  imageObject,
  slug,
  width,
  height,
  objectfit,
}) {
  const image = (
    <Image
      width={width ? width : '1000'}
      height={height ? height : '550'}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder(imageObject).url()}
      objectFit={objectfit ? objectfit : 'cover'}
      objectPosition="center"
    />
  )

  return (
    <div className="lg:-mx-5">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
