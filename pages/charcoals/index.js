import React from 'react'
import Layout from '@/components/Layout'
import SidebarLayout from '@/components/SidebarLayout'
import { getCharcoals, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import Artwork from '@/components/Artwork'
import relevantEvents from 'utils/relevantEvents'
import { v4 as uuidv4 } from 'uuid'

export default function Index({ preview, content, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>Charcoals </PostTitle>
          {content.map((p) => (
            <Artwork key={uuidv4()} artwork={p.artWork} title={p.title} />
          ))}
        </Container>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)

  const allCharcoals = await getCharcoals(preview)
  return {
    props: { preview, content: allCharcoals, upcomingEvents },
    revalidate: 1,
  }
}
