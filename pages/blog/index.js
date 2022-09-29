import Container from '@/components/container'
import MoreStories from '@/components/MoreStories'
import HeroPost from '@/components/HeroPost'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { getAllPostsForHome, getUpcomingEvents } from '../../lib/api'
import SidebarLayout from '@/components/SidebarLayout'
import PostTitle from '@/components/post-title'
import relevantEvents from 'utils/relevantEvents'

export default function Index({ allPosts, preview, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>ARTIST PORTFOLIO</title>
        </Head>
        <SidebarLayout>
          <Container upcomingEvent={events ? events[0] : null}>
            <PostTitle>Writings by Karrie</PostTitle>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              Most Recent
            </h2>
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
          </Container>
        </SidebarLayout>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview, upcomingEvents },
    revalidate: 1,
  }
}
