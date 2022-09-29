import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Container({ children, background, upcomingEvent }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 7000)
    return () => clearTimeout(timer)
}, [])

  return (
    <div
      className={`h-screen bg-no-repeat bg-fixed bg-gray-50 bg-opacity-20 lg:overflow-x-scroll`}
    >
      {upcomingEvent && (
        <div
          className={`${
            show ? 'opacity-100' : 'opacity-0'
          } hidden md:inline-flex transition-all duration-700 hover:opacity-100 ease-out p-5 font-light hover:text-opacity-100 tracking-wide text-gray-900  shadow-sm w-full filter backdrop-blur-2xl`}
        >
          <Link href="/upcoming-events">
            <a className="text-blue-600 hover:text-blue-700 cursor-pointer text-xl">
              <span className="pr-1 cursor-default text-gray-900">
                Upcoming Event:{' '}
              </span>
              {upcomingEvent.title}
              <span className=" pl-1 underline">See more here!</span>
            </a>
          </Link>
        </div>
      )}
      {children}
    </div>
  )
}
