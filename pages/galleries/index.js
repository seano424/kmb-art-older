import React from 'react'
import Layout from '@/components/layout'
import SidebarLayout from '@/components/sidebar-layout'
import { getSeries } from '../../lib/api'
import PostTitle from '@/components/post-title'
import FeatureImage from '@/components/feature-image'
import Container from '@/components/container'
import Galleries from '@/components/galleries'

export default function Index({ preview, series }) {
  // console.log(series)
  return (
    <Layout preview={preview}>
      <SidebarLayout>
        <Container background>
          <PostTitle>Galleries</PostTitle>
          <Galleries series={series} />
        </Container>
      </SidebarLayout>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allSeries = await getSeries(preview)
  return {
    props: { preview, series: allSeries },
    revalidate: 1,
  }
}
