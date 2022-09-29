import { getBook } from '../../lib/api'
import BookDisplay from '../../components/BookDisplay'
import PostTitle from '../../components/post-title'
import Container from '@/components/container'

export default function Index({ book }) {
  return (
    <Container background>
      <PostTitle>Dancing With A Thousand Bees</PostTitle>
      <BookDisplay book={book[0]} />
    </Container>
  )
}
Index.primarySite = true

export async function getStaticProps({ preview = false }) {
  const book = await getBook(preview)
  return {
    props: { book },
    revalidate: 1,
  }
}
