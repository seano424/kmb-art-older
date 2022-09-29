import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>Karrie Marie Baxley | Artist and Writer</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta charset="utf-8"></meta>
      <meta
        name="description"
        content="Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks."
      ></meta>
      <meta
        property="og:title"
        content="Karrie Marie Baxley - Artist and Writer"
      />
      <meta property="og:image" content="/images/home-image.png" />
      <meta
        property="og:description"
        content="Karrie Marie Baxley is an an artist based in Kansas City. She works in such mediums as paintings, charcoals, and inks."
      />
      <meta
        property="og:site_name"
        content="Karrie Marie Baxley | Artist and Writer"
      />
    </Head>
  )
}
