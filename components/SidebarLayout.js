import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavContext } from '@/context/NavContext'
import MainMobileNav from './MainMobileNav'
import clsx from 'clsx'
import { navigation } from '@/lib/navigation'

export default function SidebarLayout({ children, background = true }) {
  const { open, toggleOpen } = useContext(NavContext)
  const { pathname } = useRouter()
  const bgheight = open ? '100vh' : '0'
  return (
    <>
      <nav>
        <div className="transition-opacity duration-100 ease-in-out fixed z-20 bg-gray-50 shadow-md md:pl-12 md:flex min-h-full top-24 md:pr-12 md:mt-0 md:top-0 md:overflow-x-hidden flex-col md:w-80 flex-shrink-0 hidden">
          <div className="flex flex-col mb-6">
            <Link href="/">
              <a className="my-8" onClick={toggleOpen}>
                <h2 className="text-6xl leading-none hover:text-blue-600 transition duration-300 cursor-pointer">
                  Karrie Marie Baxley
                </h2>
                <p className="text-lg pl-1 text-gray-400 pt-1">
                  artist & creator
                </p>
              </a>
            </Link>

            {navigation.slice(0, 5).map((link) => (
              <Link key={link.name} href={`/${link.link}`}>
                <a
                  onClick={toggleOpen}
                  className={clsx(
                    'sidebar-link',
                    open
                      ? 'text-2xl md:text-base transition-all duration-200'
                      : 'text-base',
                    pathname === `/${link.link}` && 'text-blue-600'
                  )}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          {navigation.slice(5, navigation.length).map((link) => (
            <Link key={link.name} href={`/${link.link}`}>
              <a
                onClick={toggleOpen}
                className={clsx(
                  'sidebar-link',
                  open
                    ? 'text-2xl md:text-base transition-all duration-200'
                    : 'text-base',
                  pathname === `/${link.link}` && 'text-blue-600'
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        <article className="md:ml-80 h-screen bg-[##EFF0F0]">
          {children}
        </article>
      </nav>

      <section
        style={{ top: '90px', height: bgheight }}
        className={`absolute flex md:hidden z-10 bg-white h-0 w-full transition-all duration-300 ${
          open ? `h-full visible opacity-100 w-full` : `opacity-0`
        }`}
      >
        {open && <MainMobileNav />}
      </section>
    </>
  )
}
