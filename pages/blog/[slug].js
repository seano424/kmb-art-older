import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/PostBody";
import MoreStories from "../../components/MoreStories";
import Header from "../../components/Header";
import PostHeader from "../../components/PostHeader";
import Comments from "../../components/Comments";
import SectionSeparator from "../../components/SectionSeparator";
import Layout from "../../components/Layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import SidebarLayout from "@/components/SidebarLayout";
import Form from "../../components/Form";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>{post ? post.title : "KMB Arts"}</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>
      <SidebarLayout>
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="lg:mx-20">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.body} />
              </article>
              <Comments comments={post.comments} />
              <Form _id={post._id} />

              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </SidebarLayout>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}
