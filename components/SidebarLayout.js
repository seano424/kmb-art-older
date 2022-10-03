import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { navigation } from '@/lib/navigation'
import { NavContext } from '@/context/NavContext'

export default function SidebarLayout({ children }) {
  const { toggleOpen } = useContext(NavContext)
  const { pathname } = useRouter()

  return (
    <nav>
      <div className="fixed top-24 z-20 hidden min-h-full flex-shrink-0 flex-col  transition-opacity duration-100 ease-in-out lg:top-0 lg:mt-0 lg:flex lg:w-64 lg:overflow-x-hidden lg:px-12 xl:w-96">
        <div className="flex flex-col pb-6">
          <Link href="/">
            <a className="my-8" onClick={toggleOpen}>
              <h2 className="cursor-pointer text-6xl leading-none transition duration-300 hover:text-blue-600">
                Karrie Marie Baxley
              </h2>
              <p className="pl-1 pt-1 text-lg text-gray-800">
                artist & creator
              </p>
            </a>
          </Link>

          {navigation.slice(0, 4).map((link) => (
            <Link key={link.name} href={`/${link.link}`}>
              <a
                onClick={toggleOpen}
                className={clsx(
                  'sidebar-link',
                  pathname === `/${link.link}` && 'text-blue-900'
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        {navigation.slice(4, navigation.length).map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <a
              onClick={toggleOpen}
              className={clsx(
                'sidebar-link',
                pathname === `/${link.link}` && 'text-blue-900'
              )}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </div>
      <article className="bg-[##EFF0F0] h-screen lg:ml-64 xl:ml-96">
        {children}
      </article>
    </nav>
  )
}
