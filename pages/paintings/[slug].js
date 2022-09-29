import React from 'react'
import Layout from '@/components/Layout'
import SidebarLayout from '@/components/SidebarLayout'
import { getSerie, getAllPaintingsWithSlug } from '../../lib/api'
import Artwork from '@/components/Artwork'

export default function InkWork({ preview, paintings }) {
  const content = paintings.results
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <section className="mx-20">
          {content.map((p) => (
            <>
              <h1 className="my-8">{p.title}</h1>
              <Artwork artwork={p.artWork} />
            </>
          ))}
        </section>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const allPaintings = await getSerie(params.slug, preview)
  return {
    props: { preview, paintings: allPaintings },
    revalidate: 1,
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
