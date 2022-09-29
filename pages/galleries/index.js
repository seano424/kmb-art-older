import { getSeries, getUpcomingEvents } from '../../lib/api'
import relevantEvents from 'utils/relevantEvents'
import PostTitle from '@/components/PostTitle'
import Container from '@/components/Container'
import Galleries from '@/components/Galleries'

export default function Index({ series, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  return (
    <Container upcomingEvent={events ? events[0] : null}>
      <PostTitle>Galleries</PostTitle>
      <Galleries series={series} />
    </Container>
  )
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)

  const allSeries = await getSeries(preview)
  return {
    props: { series: allSeries, upcomingEvents },
    revalidate: 1,
  }
}
