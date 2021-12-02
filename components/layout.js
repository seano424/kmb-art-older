import Footer from '../components/footer'
import Meta from '../components/meta'
import Head from 'next/head'

export default function Layout({ footer, children }) {
  return (
    <>
      <Head>
        <title>Karrie Marie Baxley | Artist and Writer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Meta /> */}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        {footer && <Footer />}
      </div>
    </>
  )
}
