import { getFeatureImage } from '../lib/api'
import Link from 'next/link'
import Image from 'next/image'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import Meta from '@/components/Meta'
import { urlFor } from 'lib/sanity'

export default function Index({ feature }) {
  return (
    <main>
      <Meta />
      <div className="absolute z-50 flex h-screen w-screen items-center justify-center text-white md:grid md:grid-cols-2">
        <div className="col-start-2 flex flex-col">
          <h1 className="mb-10 text-[5.5rem] font-bold uppercase leading-tight">
            Karrie Marie Baxley
          </h1>
          <div className="ml-2 flex items-center space-x-4">
            <Link href="/paintings">
              <a className="bg-gray-100 px-10 py-3 text-2xl uppercase text-gray-900 filter transition-all duration-300 hover:bg-gray-50 hover:brightness-125 hover:drop-shadow-2xl">
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
    </main>
  )
}

Index.primarySite = false

export async function getStaticProps({ preview = false }) {
  const feature = await getFeatureImage(preview)
  return {
    props: { preview, feature: feature[0] },
    revalidate: 600,
  }
}
