import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'

export default function Galleries({ series }) {
  console.log(series)

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {series.map((serie) => (
        <Link key={serie._id} href={`/${serie.category}/${serie.slug.current}`}>
          <a>
            <div className="bg-gray-100 bg-opacity-40 hover:bg-opacity-70 py-5 lg:p-10">
              <Image
                alt={serie.title}
                src={imageBuilder(serie.featureImage).url()}
                width={35}
                height={35}
                objectFit="contain"
                objectPosition="center"
                layout="responsive"
              />
              <p className="text-center my-2 text-base">{serie.title}</p>
            </div>
          </a>
        </Link>
      ))}
    </section>
  )
}
