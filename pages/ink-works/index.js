import { getInkWorks, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import Artwork from '@/components/Artwork'
import relevantEvents from 'utils/relevantEvents'
import { v4 as uuidv4 } from 'uuid'

export default function Index({ content, events }) {
  return (
    <Container upcomingEvent={events}>
      <PostTitle>Ink Works </PostTitle>
      {content.map((p) => (
        <Artwork key={uuidv4()} artwork={p.artWork} title={p.title} />
      ))}
    </Container>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const events = relevantEvents(upcomingEvents)

  const allInks = await getInkWorks(preview)
  return {
    props: {
      content: allInks,
      events: JSON.parse(JSON.stringify(events))[0] ?? null,
    },
    revalidate: 600
  }
}
