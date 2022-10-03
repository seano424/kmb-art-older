import { getAboutContent } from '../../lib/api'
import { imageBuilder } from '../../lib/sanity'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'

export default function About({ body, image }) {
  return (
    <article className="py-base px-base grid grid-cols-2 gap-10">
      <Image
        className="aspect-[.75/1] object-cover"
        src={imageBuilder(image).url()}
        title="image of Karrie Marie Baxley"
        width={520}
        height={700}
      />
      <div className="flex flex-col justify-center">
        <BlockContent blocks={body} className="text-2xl" />
      </div>
    </article>
  )
}

About.primarySite = true

export async function getStaticProps({ preview = false }) {
  const content = await getAboutContent(preview)
  return {
    props: {
      content,
      body: content[0].body,
      image: content[0].main_image,
    },
    revalidate: 600,
  }
}
