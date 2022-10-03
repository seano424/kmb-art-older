import { useContext } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { NavContext } from '../context/NavContext'
import Link from 'next/link'
import Footer from './Footer'
import Meta from './Meta'

export default function Layout({ footer, children }) {
  const { open, toggleOpen } = useContext(NavContext)

  return (
    <div className="flex min-h-screen flex-col">
      <Meta />
      <div className="absolute top-0 left-0 right-0 z-50 flex h-24 items-center justify-between bg-white px-5 font-black tracking-tighter lg:hidden">
        <Link href="/">
          <a className="text-3xl text-blue-900">Karrie Marie</a>
        </Link>
        <div onClick={toggleOpen}>
          <Hamburger
            easing="ease-in"
            distance="lg"
            rounded
            size={24}
            toggled={open}
            toggle={toggleOpen}
          />
        </div>
      </div>
      <main className="relative top-20 flex-1 lg:top-0">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
