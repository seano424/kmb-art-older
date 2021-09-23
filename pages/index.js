import Intro from '../components/intro'
import Layout from '../components/layout'
import { getCarouselImages } from '../lib/api'
import Head from 'next/head'
import Nav from '@/components/navbar'

export default function Index({ preview, carouselImages }) {
  return (
    <>
      <Layout footer preview={preview}>
        <Head>
          <title>Karrie Marie Baxley | Artist and Writer</title>
        </Head>
        <Nav />
        <Intro images={carouselImages} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allCarouselImages = await getCarouselImages(preview)
  return {
    props: { preview, carouselImages: allCarouselImages },
    revalidate: 1,
  }
}
