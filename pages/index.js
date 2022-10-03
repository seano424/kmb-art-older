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
      <div className="absolute z-50 flex h-screen w-screen grid-cols-2 items-center justify-center text-white lg:grid">
        <div className="col-start-2 flex flex-col px-5 lg:px-0">
          <h1 className="mb-10 text-right text-[4rem] font-bold uppercase leading-tight lg:text-left lg:text-[5.5rem]">
            Karrie Marie Baxley
          </h1>
          <div className="ml-2 flex flex-col items-end gap-5 space-x-4 md:flex-row md:items-center">
            <Link href="/charcoals">
              <a className="w-max bg-gray-100 px-10 py-3 text-2xl uppercase text-gray-900 filter transition-all duration-300 hover:bg-gray-50 hover:brightness-125 hover:drop-shadow-2xl">
                Enter site
              </a>
            </Link>
            <div className="flex gap-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100009833221050"
              >
                <FaFacebookF className="text-3xl" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/kmariebaxley/"
              >
                <FiInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Image
          className="object-cover object-top"
          src={urlFor(feature[0].image).url()}
          alt="Homepage Image"
          layout="fill"
          priority
        />
      </div>
      <div className="flex lg:hidden">
        <Image
          className="object-cover object-top"
          src={urlFor(feature[1].image).url()}
          alt="Homepage Image"
          layout="fill"
          priority
        />
      </div>
    </main>
  )
}

Index.primarySite = false

export async function getStaticProps({ preview = false }) {
  const feature = await getFeatureImage(preview)
  return {
    props: { preview, feature: feature },
    revalidate: 600,
  }
}
