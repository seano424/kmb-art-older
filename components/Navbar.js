import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainMobileNav from './MainMobileNav'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const maxContent = {
    width: 'max-content',
  }

  const bgheight = open ? '100vh' : '0'

  return (
    <>
      <nav className="flex items-center justify-around bg-gray-50 md:px-12">
        <Link href="/paintings" passHref>
          <h1
            style={{ height: '6rem' }}
            className="xl:w-5/5 relative h-24 w-3/5 cursor-pointer"
          >
            <Image
              src="/images/full-signature.png"
              alt="Karrie Marie Baxley Website Logo"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </h1>
        </Link>

        <article className="relative hidden w-full items-center justify-end md:h-20 md:pr-28 lg:flex xl:pr-0">
          <Link href="/galleries">
            <a
              style={maxContent}
              className="w-max cursor-pointer rounded px-2 py-2 text-xs font-normal uppercase tracking-widest hover:bg-red-300 md:px-4 lg:w-max"
            >
              Artwork
            </a>
          </Link>

          <Link href="/dancing-with-a-thousand-bees">
            <a
              style={maxContent}
              className="w-max cursor-pointer rounded px-2 py-2 text-xs font-normal uppercase tracking-widest hover:bg-red-300 md:px-4 lg:w-max"
            >
              My Book
            </a>
          </Link>
          <Link href="/about">
            <a
              style={maxContent}
              className="w-max cursor-pointer rounded px-2 py-2 text-xs font-normal uppercase tracking-widest hover:bg-red-300 md:px-4 lg:w-max"
            >
              About Karrie
            </a>
          </Link>
          <Link href="/blog">
            <a
              style={maxContent}
              className="w-max cursor-pointer rounded px-2 py-2 text-xs font-normal uppercase tracking-widest hover:bg-red-300 md:px-4 lg:w-max"
            >
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a
              style={maxContent}
              className="w-max cursor-pointer rounded px-2 py-2 text-xs font-normal uppercase tracking-widest hover:bg-red-300 md:px-4 lg:w-max"
            >
              Contact
            </a>
          </Link>
        </article>
        <article
          onClick={() => setOpen(!open)}
          className="z-50 flex cursor-pointer flex-col justify-center p-3 md:hidden"
        >
          <div
            className={`relative h-1 w-8 rounded-lg bg-gray-900 transition-all duration-150 ease-linear ${
              open ? `rotate-45 transform` : `mt-1 rotate-0 transform`
            }`}
          />
          <div
            className={`relative h-1 w-8 rounded-lg bg-gray-900 transition-all duration-150 ease-linear ${
              open
                ? `translate-x-5 transform opacity-0`
                : `mt-1 translate-x-0 transform opacity-100 `
            }`}
          />
          <div
            className={`relative h-1 w-8 rounded-lg bg-gray-900 transition-all duration-150 ease-linear ${
              open ? `-mt-2 -rotate-45 transform` : `mt-1 rotate-0 transform `
            }`}
          />
        </article>
      </nav>
      <section
        style={{ top: '90px', height: bgheight }}
        className={`absolute z-50 h-0 w-full bg-gray-50 transition-all duration-200 ease-linear ${
          open ? `visible h-full w-full opacity-100` : `opacity-0`
        }`}
      >
        {open && <MainMobileNav />}
      </section>
    </>
  )
}
