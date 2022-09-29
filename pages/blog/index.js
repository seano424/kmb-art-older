import Container from '@/components/container'
import MoreStories from '@/components/MoreStories'
import HeroPost from '@/components/HeroPost'
import { getAllPostsForHome, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/postTitle'
import relevantEvents from 'utils/relevantEvents'

export default function Index({ allPosts, upcomingEvents }) {
  const events = relevantEvents(upcomingEvents)

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
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
  )
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const upcomingEvents = await getUpcomingEvents(preview)
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, upcomingEvents },
    revalidate: 1,
  }
}
