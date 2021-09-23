import styles from './container.module.css'

export default function Container({ children, background, upcomingEvent }) {
  return (
    <div
      style={{
        backgroundImage: background ? `url("images/background.webp")` : '',
      }}
      className={`h-screen ${styles.backgroundContainer} container mx-auto bg-gray-50 bg-opacity-20  lg:w-4/5 lg:right-0`}
    >
      {upcomingEvent && (
        <div className="p-5 font-thin tracking-wide text-red-400 shadow-sm">
          <span className="text-gray-900">Upcoming Event </span>
          <span className="">{upcomingEvent.title}</span>
          {upcomingEvent.linkUrl && (
            <a
              className="text-base pl-1 underline"
              href={upcomingEvent.linkUrl}
            >
              See more here!
            </a>
          )}
        </div>
      )}
      <div className="px-10">{children}</div>
    </div>
  )
}
