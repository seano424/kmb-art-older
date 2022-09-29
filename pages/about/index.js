import { getAboutContent } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import PostBody from '@/components/PostBody'
import { imageBuilder } from '../../lib/sanity'
import Image from 'next/image'
import { getUpcomingEvents } from '../../lib/api'
import relevantEvents from 'utils/relevantEvents'
import BlockContent from '@sanity/block-content-to-react'

export default function About({ content, upcomingEvents }) {
  const image = content[0].main_image
  const body = content[0].body
  const title = content[0].title
  const events = relevantEvents(upcomingEvents)

  return (
    <Container upcomingEvent={events ? events[0] : null}>
      <PostTitle>{title}</PostTitle>
      <article className="grid grid-cols-2 gap-10 pt-10">
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
    </Container>
  )
}

About.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)

  const content = await getAboutContent(preview)
  return {
    props: { content, upcomingEvents },
    revalidate: 1,
  }
}
