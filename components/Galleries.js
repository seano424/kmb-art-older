import Image from 'next/image'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'

export default function Galleries({ series }) {
  return (
    <section className="py-base px-base grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {series.map((serie) => (
        <Link key={serie._id} href={`/${serie.category}/${serie.slug.current}`}>
          <a>
            <div className="bg-gray-100 bg-opacity-40 py-5 hover:bg-opacity-70 lg:p-10">
              <Image
                alt={serie.title}
                src={imageBuilder(serie.featureImage).url()}
                width={35}
                height={35}
                objectFit="contain"
                objectPosition="center"
                layout="responsive"
              />
              <p className="my-2 text-center text-base">{serie.title}</p>
            </div>
          </a>
        </Link>
      ))}
    </section>
  )
}
