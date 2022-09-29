import CoverImage from './CoverImage'
import PostBody from './PostBody'

export default function BookDisplay({ book }) {
  const { front_image, back_image, _id, body } = book

  return (
    <section key={_id} className="md:flex">
      <div className="flex flex-col xl:grid grid-cols-2 items-center justify-center w-full gap-4 col-span-2">
        <div>
          <a
            target="_blank"
            href="https://www.amazon.com/"
            className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500  opacity-75 cursor-pointer flex items-center justify-center rounded-t-3xl p-5 shadow-lg font-semibold text-xl hover:text-gray-50 text-gray-100 group hover:scale-100 transition-all duration-500 ease-linear px-12 md:m-auto"
          >
            Available on Amazon 😊 🐝
          </a>

          <div className="bg-white flex items-center rounded-b-3xl shadow-3xl bg-opacity-75 font-semibold px-4 pb-4 lg:px-0">
            <PostBody content={body} />
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full h-full bg-blue-200 lg:bg-opacity-0 rounded-3xl py-5">
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
