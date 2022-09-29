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
      <div className="p-10">
        <h2 className="h2 pb-10 font-extrabold ">Upcoming Events</h2>
        <div className="flex flex-col gap-5">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 gap-5 rounded bg-white p-8 shadow-2xl"
            >
              <Image
                className="object-cover object-top"
                src={urlFor(event.main_image).url()}
                alt="event image"
                width={700}
                height={300}
              />

              <div className="flex flex-col gap-5">
                <h4 className="h4">{event.title}</h4>
                <a
                  className="text-2xl text-blue-700 underline hover:text-blue-300"
                  href={event.linkUrl}
                >
                  Find out more about the venue
                </a>
              </div>
            </div>
          ))}
        </div>
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
