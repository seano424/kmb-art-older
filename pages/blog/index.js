import Container from '@/components/Container'
import MoreStories from '@/components/MoreStories'
import HeroPost from '@/components/HeroPost'
import { getAllPostsForHome, getUpcomingEvents } from '../../lib/api'
import PostTitle from '@/components/PostTitle'
import relevantEvents from 'utils/relevantEvents'

export default function Index({ events, heroPost, morePosts }) {
  return (
    <Container upcomingEvent={events}>
      <PostTitle>Writings by Karrie</PostTitle>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
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
  const events = relevantEvents(upcomingEvents)

  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {
      events: JSON.parse(JSON.stringify(events))[0],
      heroPost: allPosts[0],
      morePosts: allPosts.slice(1),
    },
    revalidate: 600
  }
}
