import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getCarouselImages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview, carouselImages }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(heroPost.coverImage);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Karrie Marie Baxley</title>
        </Head>
        <Intro images={carouselImages} />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
