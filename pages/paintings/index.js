import { getPaintings, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import Artwork from '@/components/Artwork'
import relevantEvents from 'utils/relevantEvents'
import { v4 as uuidv4 } from 'uuid'

export default function Index({ content, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Container upcomingEvent={events ? events[0] : null} background>
      <PostTitle>Paintings </PostTitle>
      {content.map((p) => (
        <Artwork key={uuidv4()} artwork={p.artWork} title={p.title} />
      ))}
    </Container>
  )
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const allPaintings = await getPaintings(preview)
  return {
    props: { content: allPaintings, upcomingEvents },
    revalidate: 1,
  }
}
