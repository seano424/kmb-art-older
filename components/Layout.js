import Footer from './Footer'
import Meta from './Meta'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext'
import { Squash as Hamburger } from 'hamburger-react'

export default function Layout({ footer, children }) {
  const { toggleOpen } = useContext(NavContext)
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Meta />
      <div className="absolute top-0 left-0 right-0 z-50 flex h-24 items-center justify-between px-5 lg:hidden">
        <div onClick={toggleOpen}>
          <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
        </div>
        <Link href="/">
          <a className="text-2xl text-blue-900">Karrie Marie Baxley</a>
        </Link>
      </div>
      <main className="relative flex-1">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
