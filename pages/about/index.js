import { getAboutContent } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import PostBody from '@/components/PostBody'
import { imageBuilder } from '../../lib/sanity'
import Image from 'next/image'
import { getUpcomingEvents } from '../../lib/api'
import relevantEvents from 'utils/relevantEvents'

export default function About({ content, upcomingEvents }) {
  const image = content[0].main_image
  const body = content[0].body
  const title = content[0].title
  const events = relevantEvents(upcomingEvents)

  return (
    <Container upcomingEvent={events ? events[0] : null}>
      <PostTitle>{title}</PostTitle>
      <article className="flex flex-wrap justify-center">
        <div className="">
          <Image
            className="rounded"
            src={imageBuilder(image).url()}
            title="image of Karrie Marie Baxley"
            height={600}
            width={400}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="md:m-20 mb-10 my-8 md:p-8 xl:m-0 xl:p-0 xl:w-1/2 bg-transparent lg:bg-white flex items-center">
          <PostBody content={body} />
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
