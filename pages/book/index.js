import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import { getBook } from '@/lib/api'

export default function Index({ image, body }) {
  return (
    <div className="px-base py-base grid h-full gap-10 lg:grid-cols-2">
      <Image
        className="aspect-[.65/1] object-contain"
        src={urlFor(image).url()}
        alt="Dancing With A Thousand Bees"
        height={700}
        width={400}
        priority
      />
      <div className="flex flex-1 flex-col justify-center gap-3 text-xl leading-8">
        <PortableText value={body} />
      </div>
    </div>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const book = await getBook(preview)
  return {
    props: {
      image: book[0].front_image,
      body: book[0].body,
    },
    revalidate: 600,
  }
}
