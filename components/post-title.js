import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
// import Hamburger from 'hamburger-react'
import { Squash as Hamburger } from 'hamburger-react'

export default function PostTitle({ children }) {
  const { isOpen, toggleOpen } = useContext(NavContext)
  // const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between uppercase font-bold text-2xl pt-10 mb-10">
      <div
        onClick={toggleOpen}
        className="lg:hidden cursor-pointer flex gap-5 justify-between items-center w-full"
      >
        <Hamburger toggled={isOpen} toggle={toggleOpen} />
      </div>
      <div className="md:text-5xl text-gray-300 text-right md:text-left font-normal">
        {children}
      </div>
    </div>
  )
}
