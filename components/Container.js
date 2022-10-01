import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Container({ children, upcomingEvent }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 7000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen bg-gray-50 bg-opacity-20 bg-fixed bg-no-repeat lg:overflow-x-scroll">
      {upcomingEvent && (
        <div
          className={clsx(
            'fixed z-50 hidden h-20 w-full items-center border-gray-100 bg-white/90 p-5 font-light tracking-wide text-gray-900 filter backdrop-blur-2xl  transition-all duration-700 ease-out hover:text-opacity-100 hover:opacity-100 lg:flex',
            show ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Link href="/upcoming-events">
            <a className="group cursor-pointer text-2xl text-blue-600 hover:text-blue-700">
              <span className="cursor-default pr-1 text-gray-900">
                Upcoming Event:{' '}
              </span>
              <span className="underline-offset-8 group-hover:underline">
                {upcomingEvent.title}
              </span>
              {'  '}
            </a>
          </Link>
        </div>
      )}
      <div className="relative top-24 pr-10">{children}</div>
    </div>
  )
}
