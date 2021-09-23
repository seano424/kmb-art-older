import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import { getUpcomingEvents } from 'lib/api'
import relevantEvents from 'utils/relevantEvents'

export default function index({ upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Layout>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>Contact Karrie</PostTitle>
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
