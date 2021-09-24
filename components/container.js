import { useEffect, useState } from 'react'
import styles from './container.module.css'
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
      className={`h-screen ${styles.backgroundContainer} container mx-auto bg-gray-50 bg-opacity-20  lg:w-4/5 lg:right-0`}
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
