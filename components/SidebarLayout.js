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
      <na>
        <div className="fixed top-24 z-20 hidden min-h-full flex-shrink-0 flex-col bg-gray-50 shadow-md transition-opacity duration-100 ease-in-out md:top-0 md:mt-0 md:flex md:w-80 md:overflow-x-hidden md:pl-12 md:pr-12">
          <div className="mb-6 flex flex-col">
            <Link href="/">
              <a className="my-8" onClick={toggleOpen}>
                <h2 className="cursor-pointer text-6xl leading-none transition duration-300 hover:text-blue-600">
                  Karrie Marie Baxley
                </h2>
                <p className="pl-1 pt-1 text-lg text-gray-400">
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
                      ? 'text-2xl transition-all duration-200 md:text-base'
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
                    ? 'text-2xl transition-all duration-200 md:text-base'
                    : 'text-base',
                  pathname === `/${link.link}` && 'text-blue-600'
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
        <article className="bg-[##EFF0F0] h-screen md:ml-80">
          {children}
        </article>
      </na>

      <section
        style={{ top: '90px', height: bgheight }}
        className={`absolute z-10 flex h-0 w-full bg-white transition-all duration-300 md:hidden ${
          open ? `visible h-full w-full opacity-100` : `opacity-0`
        }`}
      >
        {open && <MainMobileNav />}
      </section>
    </>
  )
}
