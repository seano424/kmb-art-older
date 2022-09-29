import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="pb-2 shadow-small">
      <div className="hidden md:mb-12 md:block">
        <Avatar name={author?.name} picture={author?.picture} />
      </div>
      <div className="-mx-5 mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="flex items-center lg:mx-20 lg:block">
        <div className="mb-6 block md:hidden">
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div className="mb-6 pl-2 text-lg opacity-50 lg:pl-0">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  )
}
