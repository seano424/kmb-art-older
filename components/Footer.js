import Container from './container'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="flex w-full px-10 bg-black text-white border-8 border-black justify-between items-center">
        <a
          className="text-base hidden lg:flex"
          href="https://www.seanpatrick.io"
          target="_blank"
          rel="noreferrer"
        >
          Site created by Sean O'Reilly
        </a>
        <p className="lg:w-2/5">
          Copyright © 2021-2025 Karrie Marie Arts. All Rights Reserved. All
          images are copyrighted to their respective owners.
        </p>
        <div className="hidden lg:flex">
          <Image
            src="/images/full-initials.png"
            alt="Karrie Marie Baxley Website Logo"
            width={180}
            height={80}
            quality={100}
          />
        </div>
      </div>
    </footer>
  )
}
