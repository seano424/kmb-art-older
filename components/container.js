import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Container({ children, background, upcomingEvent }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 7000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`h-screen absolute bg-no-repeat bg-fixed top-0 bottom-0 container mx-auto bg-gray-50 bg-opacity-20 md:w-4/6 xl:w-4/5 lg:right-0 lg:overflow-x-scroll`}
    >
      {upcomingEvent && (
        <div
          className={`${
            show ? 'opacity-100' : 'opacity-0'
          } hidden md:inline-flex transition-all duration-700 hover:opacity-100 ease-out p-5 font-light text-opacity-80 hover:text-opacity-100 tracking-wide text-gray-600  shadow-sm w-full`}
        >
          <span className="pr-1 cursor-default">Upcoming Event: </span>
          <Link href="/upcoming-events">
            <a className="text-red-400 hover:text-red-300 cursor-pointer text-base">
              {upcomingEvent.title}
              <span className=" pl-1 underline">See more here!</span>
            </a>
          </Link>
        </div>
      )}
      <div className="px-3 md:px-10">{children}</div>
    </div>
  )
}
