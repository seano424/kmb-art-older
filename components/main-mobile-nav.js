import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'

export default function MainMobileNav() {
  const { open, toggleOpen } = useContext(NavContext)

  console.log(open)
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Link href="/paintings">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Paintings
        </a>
      </Link>
      <Link href="/charcoals">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Charcoals
        </a>
      </Link>
      <Link href="/ink-works">
        <a
          onClick={() => toggleOpen(!open)}
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
        >
          Ink Works
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
          className="mt-4 text-xl uppercase hover:bg-green-200 rounded px-2"
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
