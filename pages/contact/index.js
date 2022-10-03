import Image from 'next/image'

export default function Index() {
  return (
    <div className="px-base py-base grid gap-10 lg:grid-cols-2">
      <Image
        className="aspect-[.64/1] object-contain"
        src={'/images/back.jpg'}
        width={400}
        height={600}
        alt="contact Karrie Marie Image"
        priority
      />
      <div className="flex items-center justify-center">
        <p className="text-3xl">
          Please email me at{' '}
          <a className=" text-red-400" href="mailto:bluemoonkmo@yahoo.com">
            bluemoonkmo@yahoo.com
          </a>
        </p>
      </div>
    </div>
  )
}
Index.primarySite = true
