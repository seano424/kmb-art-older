import MoreStories from '@/components/MoreStories'
import HeroPost from '@/components/HeroPost'
import { getAllPostsForHome } from '../../lib/api'

export default function Index({ heroPost, morePosts }) {
  return (
    <>
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
    </>
  )
}

Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: {
      heroPost: allPosts[0],
      morePosts: allPosts.slice(1),
    },
    revalidate: 600,
  }
}
