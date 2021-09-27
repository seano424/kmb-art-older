import { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext'
import { Squash as Hamburger } from 'hamburger-react'

export default function PostTitle({ children }) {
  const { toggleOpen } = useContext(NavContext)
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between z-50 uppercase relative font-bold text-2xl pt-10 mb-10">
      <div
        onClick={toggleOpen}
        className="md:hidden cursor-pointer flex gap-5 justify-between items-center w-full"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="md:text-5xl text-gray-300 text-right md:text-left font-normal">
        {children}
      </div>
    </div>
  )
}
