import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'
import { navigation } from '@/lib/navigation'

export default function MainMobileNav() {
  const { open, toggleOpen } = useContext(NavContext)

  return (
    <div className="fixed inset-0 flex w-screen flex-col items-center top-0 pt-32  gap-2 bg-white text-center lg:hidden">
      <div className="flex flex-col gap-5 border-gray-100 text-center font-bold text-blue-600">
        {navigation.slice(0, 4).map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <a onClick={() => toggleOpen(!open)} className="mobile-link">
              {link.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="mx-auto my-3 h-[1px] w-80 bg-blue-100"></div>
      <div className="flex flex-col gap-5">
        {navigation.slice(4, 8).map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <a onClick={() => toggleOpen(!open)} className="mobile-link">
              {link.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
