import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'
import { navigation } from '@/lib/navigation'

export default function MainMobileNav() {
  const { open, toggleOpen } = useContext(NavContext)

  return (
    <div className="fixed inset-0 flex w-screen flex-col items-center justify-center gap-2 bg-white text-center lg:hidden">
      <div className="flex flex-col gap-1 border-b-2 border-gray-100 pb-5 text-center font-bold text-blue-800">
        {navigation.slice(0, 4).map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <a onClick={() => toggleOpen(!open)} className="mobile-link">
              {link.name}
            </a>
          </Link>
        ))}
      </div>
      {navigation.slice(4, 8).map((link) => (
        <Link key={link.name} href={`/${link.link}`}>
          <a onClick={() => toggleOpen(!open)} className="mobile-link">
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  )
}
