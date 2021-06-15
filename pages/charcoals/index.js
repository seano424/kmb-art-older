import React from 'react'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import { getCharcoals } from '../../lib/api'
import PostTitle from '@/components/post-title'
import Container from '@/components/container'
import Artwork from '@/components/artwork'

export default function Index({ preview, content }) {
  console.log(content)
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background>
          <PostTitle>All Charcoals by Karrie Marie </PostTitle>
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
  const allCharcoals = await getCharcoals(preview)
  return {
    props: { preview, content: allCharcoals },
    revalidate: 1,
  }
}
