import Image from 'next/image'

export default function Index() {
  return (
    <div className="flex flex-col items-center gap-5 pt-10 md:flex-row">
      <Image
        className="aspect-[.64/1] object-cover"
        src={'/images/back.jpg'}
        width={400}
        height={600}
        alt="contact Karrie Marie Image"
      />
      <p className="text-3xl">
        Please email me at{' '}
        <a className=" text-red-400" href="mailto:bluemoonkmo@yahoo.com">
          bluemoonkmo@yahoo.com
        </a>
      </p>
    </div>
  )
}
Index.primarySite = true
