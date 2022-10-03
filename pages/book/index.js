import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '@/lib/sanity'
import { getBook } from '@/lib/api'

export default function Index({ image, body }) {
  return (
    <div className="px-base py-base flex flex-col lg:flex-row lg:gap-10">
      <Image
        className="aspect-[.65/1] object-contain"
        src={urlFor(image).url()}
        alt="Dancing With A Thousand Bees"
        height={650}
        width={400}
      />
      <BlockContent
        className="flex flex-1 flex-col justify-center text-lg lg:p-10 lg:text-2xl"
        blocks={body}
      ></BlockContent>
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
