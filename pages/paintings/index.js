import React from 'react'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import { getPaintings, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import Artwork from '@/components/artwork'
import relevantEvents from 'utils/relevantEvents'

export default function Index({ preview, content, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container upcomingEvent={events ? events[0] : null} background>
          <PostTitle>All Paintings by Karrie Marie </PostTitle>
          <section className="mx-20">
            {content.map((p) => (
              <>
                <h1 className="my-8">{p.title}</h1>
                <Artwork artwork={p.artWork} />
              </>
            ))}
          </section>
        </Container>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const allPaintings = await getPaintings(preview)
  return {
    props: { preview, content: allPaintings, upcomingEvents },
    revalidate: 1,
  }
}
