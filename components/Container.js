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
            'fixed z-50 hidden h-28 w-full flex-col justify-center gap-2 bg-white/90 px-10 filter backdrop-blur lg:flex'
          )}
        >
          <Link href="/upcoming-events">
            <a className="cursor-pointer text-2xl text-blue-600 hover:text-blue-500">
              View all upcoming events here!
            </a>
          </Link>
          <div className="flex items-center gap-5">
            <p className="text-xl">
              Next event is at the {upcomingEvent.title}
            </p>
            <Image
              className="object-cover object-top"
              src={urlFor(upcomingEvent.main_image).url()}
              alt="event image"
              width={60}
              height={30}
            />
          </div>
        </div>
      )}
      <div className="relative lg:top-28 lg:px-10">{children}</div>
    </>
  )
}
