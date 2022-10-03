import { getSeries } from '@/lib/api'
import Galleries from '@/components/Galleries'

export default function Index({ series }) {
  return <Galleries series={series} />
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const allSeries = await getSeries(preview)
  return {
    props: {
      series: allSeries,
    },
    revalidate: 600,
  }
}
