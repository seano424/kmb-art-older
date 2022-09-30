import Footer from './Footer'
import Meta from './Meta'
import { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext'
import { Squash as Hamburger } from 'hamburger-react'

export default function Layout({ footer, children }) {
  const { toggleOpen } = useContext(NavContext)
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Meta />
      <div className="absolute top-0 left-0 right-0 z-50 flex h-24 items-center justify-between px-10 lg:hidden">
        <div onClick={toggleOpen}>
          <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <main className="relative top-24 flex-1 lg:top-0">{children}</main>
      {footer && <Footer />}
    </div>
  )
}
