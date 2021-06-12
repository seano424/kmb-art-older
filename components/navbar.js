import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainMobileNav from './main-mobile-nav'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const maxContent = {
    width: 'max-content',
  }

  const bgheight = open ? '100vh' : '0'

  return (
    <>
      <nav className="flex bg-gray-50 md:px-12 items-center mb-10 justify-around">
        <Link href="/paintings" passHref>
          <h1
            style={{ height: '6rem' }}
            className="relative w-3/5 xl:w-5/5 h-24 cursor-pointer"
          >
            <Image
              src="/images/full-signature.png"
              alt="Karrie Marie Baxley Website Logo"
              layout="fill"
              objectFit="contain"
            />
          </h1>
        </Link>

        <article className="relative w-full hidden lg:flex md:pr-28 xl:pr-0 md:h-20 items-center justify-end">
          <Link href="/galleries">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Galleries
            </a>
          </Link>
          <Link href="/paintings">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Paintings
            </a>
          </Link>
          <Link href="/ink-works">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Ink Works
            </a>
          </Link>
          <Link href="/charcoals">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Charcoals
            </a>
          </Link>
          <Link href="/blog">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Blog
            </a>
          </Link>
          <Link href="/dancing-with-a-thousand-bees">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Book
            </a>
          </Link>
          <Link href="/about">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              style={maxContent}
              className="lg:w-max px-2 md:px-4 py-2 rounded text-xs uppercase font-normal tracking-widest hover:bg-red-300 w-max cursor-pointer"
            >
              Contact
            </a>
          </Link>
        </article>
        <article
          onClick={() => setOpen(!open)}
          className="xl:hidden cursor-pointer flex flex-col justify-center p-3"
        >
          <div
            className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open ? `transform rotate-45` : `transform rotate-0 mt-1`
            }`}
          />
          <div
            className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open
                ? `transform translate-x-5 opacity-0`
                : `transform translate-x-0 opacity-100 mt-1 `
            }`}
          />
          <div
            className={`w-8 h-1 bg-gray-900 rounded-lg transition-all duration-150 ease-linear relative ${
              open ? `transform -rotate-45 -mt-2` : `transform rotate-0 mt-1 `
            }`}
          />
        </article>
      </nav>
      <section
        style={{ top: '90px', height: bgheight }}
        className={`absolute z-10 bg-gray-50 h-0 w-full transition-all duration-200 ease-linear ${
          open ? `h-full visible opacity-100 w-full` : `opacity-0`
        }`}
      >
        {open && <MainMobileNav />}
      </section>
    </>
  )
}
