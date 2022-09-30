import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from '@/lib/sanity'
import { getBook, getUpcomingEvents } from '@/lib/api'
import Container from '@/components/Container'
import relevantEvents from 'utils/relevantEvents'

export default function Index({ image, body, event }) {
  console.log(event);
  return (
    <Container upcomingEvent={event}>
      <div className="flex gap-10">
        <Image
          className="aspect-[.65/1] object-contain"
          src={urlFor(image).url()}
          alt="Dancing With A Thousand Bees"
          height={650}
          width={400}
        />
        <BlockContent
          className="flex flex-1 flex-col justify-center p-10 text-2xl"
          blocks={body}
        ></BlockContent>
      </div>
    </Container>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const events = relevantEvents(upcomingEvents)
  const book = await getBook(preview)
  return {
    props: {
      image: book[0].front_image,
      body: book[0].body,
      event: JSON.parse(JSON.stringify(events))[0] ?? null,
    },
    revalidate: 600
  }
}
