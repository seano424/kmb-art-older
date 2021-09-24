import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'

export default function MainMobileNav() {
  const { open, toggleOpen } = useContext(NavContext)

  return (
    <div className="flex flex-col items-center justify-center w-full h-[30rem] gap-4">
      <Link href="/galleries">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Galleries
        </a>
      </Link>
      <Link href="/blog">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Writings & Musings
        </a>
      </Link>
      <Link href="/upcoming-events">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Upcoming Events
        </a>
      </Link>
      <Link href="/about">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          About Karrie
        </a>
      </Link>
      <Link href="/dancing-with-a-thousand-bees">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2 text-center"
        >
          Dancing with a Thousand Bees
        </a>
      </Link>
      <Link href="/contact">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Contact
        </a>
      </Link>
    </div>
  )
}
