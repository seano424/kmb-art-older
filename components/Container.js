import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { urlFor } from 'lib/sanity'

export default function Container({ children, upcomingEvent }) {
  return (
    <>
      {upcomingEvent && (
        <div
          className={clsx(
            'z-50 hidden w-full flex-col gap-3  p-5 tracking-wide text-gray-900 transition-all duration-700  ease-out hover:text-opacity-100 hover:opacity-100 lg:flex'
          )}
        >
          <Link href="/upcoming-events">
            <a className="group cursor-pointer text-2xl  text-blue-600 underline-offset-8 hover:underline">
              View all upcoming events here!
            </a>
          </Link>
          <div className="flex items-center gap-5">
            <Image
              className="object-cover object-top"
              src={urlFor(upcomingEvent.main_image).url()}
              alt="event image"
              width={70}
              height={30}
            />
            <p className="text-xl">
              Next event is at the {upcomingEvent.title}
            </p>
          </div>
        </div>
      )}
      <div className="relative lg:px-10">{children}</div>
    </>
  )
}
