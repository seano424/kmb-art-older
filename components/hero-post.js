import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="shadow px-5 pt-2 m-auto lg:w-5/6">
      <div className="">
        <CoverImage
          slug={slug}
          imageObject={coverImage}
          title={title}
          url={coverImage}
        />
      </div>
      <div className="flex flex-col mb-20">
        <h3 className="mb-4 leading-tight">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a className=" text-3xl font-bold hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="flex items-center pb-5">
          <div className="mr-2">
            <p className="leading-relaxed">{excerpt}</p>
            <Avatar name={author?.name} picture={author?.picture} />
          </div>
          <div className="text-lg opacity-50">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
