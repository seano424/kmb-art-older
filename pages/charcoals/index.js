import { getCharcoals } from '../../lib/api'
import Artwork from '@/components/Artwork'
import { v4 as uuidv4 } from 'uuid'

export default function Index({ content }) {
  return (
    <>
      {content.map((p) => (
        <Artwork key={uuidv4()} artwork={p.artWork} title={p.title} />
      ))}
    </>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const allCharcoals = await getCharcoals(preview)
  return {
    props: {
      content: allCharcoals,
    },
    revalidate: 600,
  }
}
