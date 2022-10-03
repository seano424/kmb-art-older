import Link from 'next/link'
import clsx from 'clsx'

export default function Container({ children, upcomingEvent }) {
  return (
    <div className="h-screen bg-gray-50 bg-opacity-20 bg-fixed bg-no-repeat lg:overflow-x-scroll">
      {upcomingEvent && (
        <div
          className={clsx(
            'fixed z-50 hidden h-20 w-full items-center border-gray-100 bg-gray-50/50 p-5 font-light tracking-wide text-gray-900 transition-all duration-700 ease-out  hover:text-opacity-100 hover:opacity-100 lg:flex'
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
      <div className="relative top-24 lg:pr-10">{children}</div>
    </div>
  )
}
