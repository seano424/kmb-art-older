import { getSerie, getAllPaintingsWithSlug } from '../../lib/api'
import Artwork from '@/components/Artwork'

export default function Charcoal({ charcoals }) {
  const content = charcoals.results
  return (
    <section className="mx-20">
      {content.map((p) => (
        <>
          <h1 className="my-8">{p.title}</h1>
          <Artwork artwork={p.artWork} />
        </>
      ))}
    </section>
  )
}

Charcoal.primarySite = true

export async function getStaticProps({ params, preview = false }) {
  const allCharcoals = await getSerie(params.slug, preview)
  return {
    props: { charcoals: allCharcoals },
    revalidate: 600
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPaintingsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  }
}
