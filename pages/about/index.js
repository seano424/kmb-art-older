import Image from 'next/image'
import { getAboutContent } from '../../lib/api'
import { imageBuilder } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
export default function About({ body, image }) {
  return (
    <article className="py-base px-base grid h-full grid-cols-1 gap-10 lg:grid-cols-2">
      <Image
        className="aspect-[.75/1] object-cover"
        src={imageBuilder(image).url()}
        alt="image of Karrie Marie Baxley"
        height={700}
        width={520}
        priority
      />
      <div className="flex flex-1 flex-col justify-center gap-3 text-xl leading-8">
        <PortableText value={body} />
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
