import Avatar from "./Avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="mb-12 shadow-lg p-5">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline text-3xl font-bold">{title}</a>
        </Link>
      </h3>
      <div className="flex items-center">
        <p className="text-lg leading-relaxed">{excerpt}</p>
        <Avatar name={author?.name} picture={author?.picture} />
        <div className="ml-2 opacity-50 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
