import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'
import Image from 'next/image'
import { urlFor } from 'lib/sanity'

function UpcomingEvents({ upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)
  console.log(events)

  return (
    <Layout>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>Upcoming Events</PostTitle>
          <div className="">
            {events.map((event) => (
              <div className="my-16 divide-y-2 flex space-x-4" key={event._id}>
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
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  return {
    props: { preview, upcomingEvents },
    revalidate: 1,
  }
}

export default UpcomingEvents
