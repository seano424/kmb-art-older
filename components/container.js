import { useEffect, useState } from 'react'
import styles from './container.module.css'
import Link from 'next/link'

export default function Container({ children, background, upcomingEvent }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        backgroundImage: background ? `url("images/background.webp")` : '',
      }}
      className={`h-screen ${styles.backgroundContainer} container mx-auto bg-gray-50 bg-opacity-20  lg:w-4/5 lg:right-0`}
    >
      {upcomingEvent && (
        <div
          className={`${
            show ? 'opacity-100' : 'opacity-0'
          } transition-all duration-700 hover:opacity-100 ease-out p-5 font-light text-opacity-80 hover:text-opacity-100 tracking-wide text-gray-600  shadow-sm`}
        >
          <span className="">Upcoming Event </span>
          <span className="text-red-400 text-opacity-80">
            {upcomingEvent.title}
          </span>
          {upcomingEvent.linkUrl && (
            <Link href="/upcoming-events">
              <a className="text-base pl-1 underline text-red-400 text-opacity-80">
                See more here!
              </a>
            </Link>
          )}
        </div>
      )}
      <div className="px-10">{children}</div>
    </div>
  )
}
