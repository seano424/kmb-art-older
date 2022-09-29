import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'
import Image from 'next/image'

export default function Index({ events }) {
  return (
    <Container upcomingEvent={events}>
      <PostTitle>Contact Karrie</PostTitle>
      <div className="flex flex-col items-center gap-5 pt-10 md:flex-row">
        <Image
          className="aspect-[.64/1] object-cover"
          src={'/images/back.jpg'}
          width={400}
          height={600}
          alt="contact Karrie Marie Image"
        />
        <p className="text-3xl">
          Please email me at{' '}
          <a className=" text-red-400" href="mailto:bluemoonkmo@yahoo.com">
            bluemoonkmo@yahoo.com
          </a>
        </p>
      </div>
    </Container>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const events = relevantEvents(upcomingEvents)
  return {
    props: { preview, events: JSON.parse(JSON.stringify(events))[0] ?? null },
    revalidate: 1,
  }
}
