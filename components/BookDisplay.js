import CoverImage from './CoverImage'
import PostBody from './PostBody'

export default function BookDisplay({ book }) {
  const { front_image, _id, body } = book

  return (
    <section key={_id} className="md:flex">
      <div className="col-span-2 flex w-full grid-cols-2 flex-col items-center justify-center gap-4 xl:grid">
        <div>
          <a
            target="_blank"
            href="https://www.amazon.com/"
            className="group flex cursor-pointer items-center justify-center  rounded-t-3xl bg-gradient-to-r from-green-400 to-blue-400 p-5 px-12 text-xl font-semibold text-gray-100 opacity-75 shadow-lg transition-all duration-500 ease-linear hover:scale-100 hover:from-pink-500 hover:to-yellow-500 hover:text-gray-50 md:m-auto"
          >
            Available on Amazon 😊 🐝
          </a>

          <div className="flex items-center rounded-b-3xl bg-white bg-opacity-75 px-4 pb-4 font-semibold shadow-3xl lg:px-0">
            <PostBody content={body} />
          </div>
        </div>
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-blue-200 py-5 lg:bg-opacity-0">
          <CoverImage
            imageObject={front_image}
            title="Dancing with a thousand bees book"
            layout="fill"
            objectfit="contain"
          />
        </div>
      </div>
    </section>
  )
}
