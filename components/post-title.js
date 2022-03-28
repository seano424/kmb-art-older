import { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext'
import { Squash as Hamburger } from 'hamburger-react'

export default function PostTitle({ children }) {
  const { toggleOpen } = useContext(NavContext)
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="md:hidden flex items-center justify-between z-50 uppercase relative font-bold text-2xl pt-10 mb-10">
      <div
        onClick={toggleOpen}
        className="cursor-pointer flex gap-5 justify-between items-center w-full"
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  )
}
