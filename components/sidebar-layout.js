import { useContext } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { NavContext } from '../context/NavContext'
import MainMobileNav from './main-mobile-nav'

export default function SidebarLayout({ children, background = true }) {
  const { open, toggleOpen } = useContext(NavContext)
  const { pathname } = useRouter()
  const bgheight = open ? '100vh' : '0'
  return (
    <>
      <section>
        <article
          className={`transition-opacity duration-100 ease-in-out fixed z-20 bg-gray-50 shadow-md md:pl-12 md:flex min-h-full top-24 md:pr-12 md:mt-0 md:top-0 md:overflow-x-hidden flex-col md:w-72 flex-shrink-0 hidden`}
        >
          <div className="flex flex-col mb-6">
            <Link href="/">
              <a className="my-8" onClick={toggleOpen}>
                <h2
                  style={{ textDecorationColor: 'blanchedalmond' }}
                  className="text-6xl leading-none hover:underline cursor-pointer"
                >
                  Karrie Marie Baxley
                </h2>
                <p className="text-lg pl-1 text-gray-400 pt-1">
                  artist & creator
                </p>
              </a>
            </Link>

            <Link href="/paintings">
              <a
                onClick={toggleOpen}
                className={`${
                  open
                    ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                    : 'text-base'
                } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                  pathname === '/paintings' && 'text-gray-300'
                }`}
              >
                Paintings
              </a>
            </Link>
            <Link href="/ink-works">
              <a
                onClick={toggleOpen}
                className={`${
                  open
                    ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                    : 'text-base'
                } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                  pathname === '/ink-works' && 'text-gray-300'
                }`}
              >
                Ink Works
              </a>
            </Link>
            <Link href="/charcoals">
              <a
                onClick={toggleOpen}
                className={`${
                  open
                    ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                    : 'text-base'
                } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                  pathname === '/charcoals' && 'text-gray-300'
                }`}
              >
                Charcoals
              </a>
            </Link>
            <Link href="/galleries">
              <a
                onClick={toggleOpen}
                className={`${
                  open
                    ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                    : 'text-base'
                } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                  (pathname === '/galleries' || pathname === '/') &&
                  'text-gray-300'
                }`}
              >
                Galleries
              </a>
            </Link>
            <Link href="/upcoming-events">
              <a
                onClick={toggleOpen}
                className={`${
                  open
                    ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                    : 'text-base'
                } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                  pathname === '/upcoming-events' && 'text-gray-300'
                }`}
              >
                Upcoming Events
              </a>
            </Link>
          </div>

          <Link href="/dancing-with-a-thousand-bees">
            <a
              onClick={toggleOpen}
              className={`${
                open
                  ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                  : 'text-base'
              } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                pathname === '/dancing-with-a-thousand-bees' && 'text-gray-300'
              }`}
            >
              Book
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={toggleOpen}
              className={`${
                open
                  ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                  : 'text-base'
              } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                pathname === '/about' && 'text-gray-300'
              }`}
            >
              About
            </a>
          </Link>

          <Link href="/contact">
            <a
              onClick={toggleOpen}
              className={`${
                open
                  ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                  : 'text-base'
              } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                pathname === '/contact' && 'text-gray-300'
              }`}
            >
              Contact
            </a>
          </Link>
          <Link href="/blog">
            <a
              onClick={toggleOpen}
              className={`${
                open
                  ? 'text-2xl md:text-3xl md:text-base transition-all duration-200 ease-linear'
                  : 'text-base'
              } ml-1 font-medium mb-1 hover:text-gray-300 uppercase tracking-widest ${
                pathname === '/blog' && 'text-gray-300'
              }`}
            >
              Blog
            </a>
          </Link>
        </article>
        <article className="md:ml-72 h-screen bg-[##EFF0F0]">
          <div className="hidden md:inline-flex fixed h-full w-10/12">
            <Image
              className="object-cover"
              src={
                'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              }
              alt="bg image"
              layout="fill"
            />
          </div>
          <div className="">{children}</div>
        </article>
      </section>
      <section
        style={{ top: '90px', height: bgheight }}
        className={`absolute flex md:hidden z-10 bg-gray-50 h-0 w-full transition-all duration-500 ease-linear ${
          open ? `h-full visible opacity-100 w-full` : `opacity-0`
        }`}
        // className={`flex md:hidden`}
      >
        {open && <MainMobileNav />}
      </section>
    </>
  )
}
