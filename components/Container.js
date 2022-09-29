import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Container({ children, upcomingEvent }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 7000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`h-screen bg-gray-50 bg-opacity-20 bg-fixed bg-no-repeat lg:overflow-x-scroll`}
    >
      {upcomingEvent && (
        <div
          className={`${
            show ? 'opacity-100' : 'opacity-0'
          } hidden w-full p-5 font-light tracking-wide text-gray-900 shadow-sm filter backdrop-blur-2xl transition-all duration-700  ease-out hover:text-opacity-100 hover:opacity-100 md:inline-flex`}
        >
          <Link href="/upcoming-events">
            <a className="cursor-pointer text-xl text-blue-600 hover:text-blue-700">
              <span className="cursor-default pr-1 text-gray-900">
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
