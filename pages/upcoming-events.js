import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'
import Image from 'next/image'
import { urlFor } from 'lib/sanity'

function UpcomingEvents({ upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)
  return (
    <Container upcomingEvent={events ? events[0] : null}>
      <PostTitle>Upcoming Events</PostTitle>
      <div>
        {events.map((event, idx) => (
          <div
            className="py-16 px-8 flex space-x-4 my-8 rounded shadow-lg bg-white max-w-max"
            key={idx}
          >
            <div className="relative w-80 h-40">
              <Image
                objectFit="cover"
                src={urlFor(event.main_image).url()}
                alt="event image"
                layout="fill"
              />
            </div>
            <div>
              <h1 className="text-lg w-64 mb-4">{event.title}</h1>
              <a
                className="text-sm text-primary hover:text-blue-300"
                href={event.linkUrl}
              >
                Find out more about the venue
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
UpcomingEvents.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  return {
    props: { upcomingEvents },
    revalidate: 1,
  }
}

export default UpcomingEvents
