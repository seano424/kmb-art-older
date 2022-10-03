import Container from '@/components/Container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'
import Image from 'next/image'
import { urlFor } from 'lib/sanity'

function UpcomingEvents({ events }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <div className="px-base py-base relative top-16 lg:top-0">
      <div className="flex flex-col gap-5 ">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 gap-5 bg-gray-100 bg-opacity-40 p-8 py-5 hover:bg-opacity-70 md:grid-cols-2 lg:p-10"
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
              {event.date && (
                <p className="text-xl">
                  {new Date(event.date).toLocaleDateString('en-US', options)}
                </p>
              )}
              <a
                className="text-2xl text-blue-700 underline hover:text-blue-300"
                href={event.linkUrl}
              >
                More information
              </a>
            </div>
          </div>
        ))}
        {!events.length && (
          <div className="rounded bg-white p-8 shadow-2xl">
            <h4 className="h4">Currently no events coming up...</h4>
          </div>
        )}
      </div>
    </div>
  )
}
UpcomingEvents.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const events = relevantEvents(upcomingEvents)

  return {
    props: {
      upcomingEvents,
      events: JSON.parse(JSON.stringify(events)) ?? null,
    },
    revalidate: 600,
  }
}

export default UpcomingEvents
