import Layout from '@/components/Layout'
import SidebarLayout from '@/components/SidebarLayout'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'
import Image from 'next/image'

export default function index({ upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Layout>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>Contact Karrie</PostTitle>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <div className="relative h-80 w-64">
              <Image
                src={'/images/back.jpg'}
                layout="fill"
                alt="contact Karrie Marie Image"
              />
            </div>
            <p className="text-base">
              Please email me at{' '}
              <a
                className="text-base text-red-400"
                href="mailto:bluemoonkmo@yahoo.com"
              >
                bluemoonkmo@yahoo.com
              </a>
            </p>
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
