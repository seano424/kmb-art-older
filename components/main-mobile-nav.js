import Link from "next/link";

export default function MainMobileNav() {
  return (
    <div className="flex flex-col items-center justify-center m-12">
      <Link href="/paintings">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Paintings
        </a>
      </Link>
      <Link href="/charcoals">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Charcoals
        </a>
      </Link>
      <Link href="/ink-works">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Ink Works
        </a>
      </Link>
      <Link href="/dancing-with-a-thousand-bees">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Book
        </a>
      </Link>
      <Link href="/paintings">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          About
        </a>
      </Link>
      <Link href="/blog">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Blog
        </a>
      </Link>
      <Link href="/paintings">
        <a className="mt-4 text-4xl uppercase hover:bg-green-200 rounded px-2">
          Contact
        </a>
      </Link>
    </div>
  );
}
