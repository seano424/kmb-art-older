import { useEffect, useState } from 'react'
import CoverImage from './cover-image'
import PostBody from './post-body'

export default function BookDisplay({ book }) {
  const [bookSideBack, setBookSideBack] = useState(true)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setBookSideBack(!bookSideBack)
    }, 12000)
    return () => {
      clearTimeout(timeout)
    }
  }, [bookSideBack])

  const { front_image, back_image, _id, body } = book

  console.log(bookSideBack)
  return (
    <section key={_id} className="md:flex grid grid-cols-3 mx-10">
      <article
        className="drop-shadow-2xl self-center lg:self-start relative md:static flex-grow w-80 m-auto sm:-left-24 -left-32 top-10"
        onClick={() => setBookSideBack(!bookSideBack)}
      >
        <CoverImage
          imageObject={bookSideBack ? front_image : back_image}
          title="Dancing with a thousand bees book"
          height={700}
          width={700}
          layout="responsive"
          objectfit="contain"
        />
      </article>
      <article className="m-auto md:w-10/12 lg:w-7/12 xl:w-6/12 flex flex-col gap-4 col-span-2">
        <a
          target="_blank"
          href="https://www.amazon.com/"
          className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-pink-500 hover:to-yellow-500  opacity-75 cursor-pointer flex items-center justify-center rounded-3xl p-5 shadow-lg font-semibold text-xl hover:text-gray-50 text-gray-100 group hover:scale-100 transition-all duration-500 ease-linear px-12 relative md:static w-96 md:w-full sm:-left-24 -left-1/3 md:m-auto"
        >
          <span className="transform scale-125">Available on Amazon 😊 🐝</span>
        </a>
        <div className="bg-white relative sm:-right-10 right-20 mr-2 sm:mr-0 flex items-center rounded-3xl shadow-3xl bg-opacity-75 font-semibold pb-4 px-8 lg:px-0 md:static">
          <PostBody content={body} />
        </div>
      </article>
    </section>
  )
}
