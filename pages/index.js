import { getFeatureImage } from '../lib/api'
import Link from 'next/link'
import Image from 'next/image'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import Meta from '@/components/Meta'
import { urlFor } from 'lib/sanity'

export default function Index({ feature }) {
  return (
    <>
      <Meta />
      <div className="absolute flex justify-center items-center w-screen md:grid md:grid-cols-2 h-screen z-50 text-white">
        <div className="flex flex-col col-start-2">
          <h1 className="leading-tight mb-10 text-[5.5rem] uppercase font-bold">
            Karrie Marie Baxley
          </h1>
          <div className="ml-2 flex space-x-4 items-center">
            <Link href="/paintings">
              <a className="text-2xl hover:bg-gray-50 bg-gray-100 filter hover:drop-shadow-2xl hover:brightness-125 transition-all duration-300 text-gray-900 px-10 py-3 uppercase">
                Enter site
              </a>
            </Link>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100009833221050"
            >
              <FaFacebookF className="text-3xl" />
            </a>
            <a target="_blank" href="https://www.instagram.com/kmariebaxley/">
              <FiInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <Image
        className="object-cover object-top"
        src={urlFor(feature.image).url()}
        alt="Homepage Image"
        layout="fill"
        priority
      />
    </>
  )
}

Index.primarySite = false

export async function getStaticProps({ preview = false }) {
  const feature = await getFeatureImage(preview)
  return {
    props: { preview, feature: feature[0] },
    revalidate: 1,
  }
}
