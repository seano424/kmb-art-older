import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'

export default function MainMobileNav() {
  const { open, toggleOpen } = useContext(NavContext)

  return (
    <div className="fixed top-0 flex h-screen w-full flex-col items-center gap-4 bg-white pt-40 lg:hidden">
      <div className="flex flex-col border-b-2 pb-8 text-center font-bold text-red-400">
        <Link href="/paintings">
          <a onClick={() => toggleOpen(!open)} className="mobile-link">
            Paintings
          </a>
        </Link>
        <Link href="/charcoals">
          <a onClick={() => toggleOpen(!open)} className="mobile-link">
            Charcoals
          </a>
        </Link>
        <Link href="/ink-works">
          <a onClick={() => toggleOpen(!open)} className="mobile-link">
            Ink Works
          </a>
        </Link>
      </div>
      <Link href="/blog">
        <a onClick={() => toggleOpen(!open)} className="mobile-link">
          Writings & Musings
        </a>
      </Link>
      <Link href="/upcoming-events">
        <a onClick={() => toggleOpen(!open)} className="mobile-link">
          Upcoming Events
        </a>
      </Link>
      <Link href="/about">
        <a onClick={() => toggleOpen(!open)} className="mobile-link">
          About Karrie
        </a>
      </Link>
      <Link href="/dancing-with-a-thousand-bees">
        <a onClick={() => toggleOpen(!open)} className="mobile-link">
          Dancing with a Thousand Bees
        </a>
      </Link>
      <Link href="/contact">
        <a onClick={() => toggleOpen(!open)} className="mobile-link">
          Contact
        </a>
      </Link>
    </div>
  )
}
