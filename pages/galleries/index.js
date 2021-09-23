import React from 'react'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import { getSeries, getUpcomingEvents } from '../../lib/api'
import relevantEvents from 'utils/relevantEvents'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import Galleries from '@/components/galleries'

export default function Index({ series, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Layout>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>Galleries</PostTitle>
          <Galleries series={series} />
        </Container>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)

  const allSeries = await getSeries(preview)
  return {
    props: { preview, series: allSeries, upcomingEvents },
    revalidate: 1,
  }
}
