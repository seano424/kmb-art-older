import { getCarouselImages } from '../lib/api'
import Link from 'next/link'
import Carousel from '@/components/Carousel'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

export default function Index({ images }) {
  let homepageImages = []
  images.map(
    (i) => (
      homepageImages.push({
        image: i.mainImage,
        caption: i.mainImage?.caption,
      }),
      homepageImages.push({
        image: i.secondImage,
        caption: i.secondImage?.caption,
      }),
      homepageImages.push({
        image: i.thirdImage,
        caption: i.thirdImage?.caption,
      }),
      homepageImages.push({
        image: i.fourthImage,
        caption: i.fourthImage?.caption,
      }),
      homepageImages.push({
        image: i.fifthImage,
        caption: i.fifthImage?.caption,
      })
    )
  )
  return (
    <>
      <div className="absolute flex justify-center items-center w-screen md:grid md:grid-cols-2 h-screen z-50 text-white">
        <div></div>
        <div className="flex flex-col justify-center px-2">
          <h1 className="leading-tight mb-10 text-[5.5rem] font-secondary uppercase font-bold">
            Karrie Marie Baxley
          </h1>
          <div className="flex space-x-4 items-center">
            <Link href="/paintings">
              <a className="text-xl bg-gray-100 text-gray-900 px-3 py-2 uppercase">
                Enter site
              </a>
            </Link>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100009833221050"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a target="_blank" href="https://www.instagram.com/kmariebaxley/">
              <FiInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>
      <Carousel images={homepageImages} />
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const images = await getCarouselImages(preview)
  return {
    props: { preview, images },
    revalidate: 1,
  }
}

// <Layout footer preview={preview}>
//   <Head>
//     <title>Karrie Marie Baxley | Artist and Writer</title>
//   </Head>
//   <Nav />
//   <Intro images={carouselImages} />
// </Layout>
