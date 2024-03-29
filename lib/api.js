import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
    { slug }
  )
  return data[0]
}

export async function getFeatureImage(preview) {
  const results = await getClient(preview).fetch(`*[_type == "featureImage"]{
    image {
      asset
  }
  }`)
  return results
}

export async function getCarouselImages(preview) {
  const results = await getClient(preview).fetch(`*[_type == "carousel"]`)
  return results
}

export async function getSeries(preview) {
  const results = await getClient(preview).fetch(`*[_type == "series"]`)
  return results
}

export async function getAboutContent(preview) {
  const results = await getClient(preview).fetch(`*[_type == "about"]`)
  return results
}

export async function getUpcomingEvents(preview) {
  const results = await getClient(preview).fetch(`*[_type == "upcomingEvents"]`)
  return results
}

export async function getInkWorks(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "series" && category == 'ink-works']`
  )
  return results
}

export async function getPaintings(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "series" && category == 'paintings']`
  )
  return results
}

export async function getCharcoals(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "series" && category == 'charcoals']`
  )
  return results
}

export async function getBook(preview) {
  const results = await getClient(preview).fetch(`*[_type == "book"]`)
  return results
}

export async function getSerie(slug, preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "series" && slug.current == "${slug}"]`
  )
  return {
    results,
    slug,
  }
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPaintingsWithSlug() {
  const data = await client.fetch(
    `*[_type == "series"]{ 'slug': slug.current }`
  )
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
