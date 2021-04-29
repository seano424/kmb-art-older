import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getCarouselImages } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts, preview, carouselImages }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
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
  const allCarouselImages = await getCarouselImages();
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview, carouselImages: allCarouselImages },
    revalidate: 1,
  };
}
