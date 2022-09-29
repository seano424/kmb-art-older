import { getSeries, getUpcomingEvents } from '../../lib/api'
import relevantEvents from 'utils/relevantEvents'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import Galleries from '@/components/Galleries'

export default function Index({ series, events }) {
  return (
    <Container upcomingEvent={events}>
      <PostTitle>Galleries</PostTitle>
      <Galleries series={series} />
    </Container>
  )
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const events = relevantEvents(upcomingEvents)

  const allSeries = await getSeries(preview)
  return {
    props: {
      series: allSeries,
      events: JSON.parse(JSON.stringify(events))[0] ?? null,
    },
    revalidate: 1,
  }
}
