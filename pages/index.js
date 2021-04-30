import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getCarouselImages } from "../lib/api";
import Head from "next/head";

export default function Index({ preview, carouselImages }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Karrie Marie Baxley</title>
        </Head>
        <Intro images={carouselImages} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allCarouselImages = await getCarouselImages(preview);
  return {
    props: { preview, carouselImages: allCarouselImages },
    revalidate: 1,
  };
}
