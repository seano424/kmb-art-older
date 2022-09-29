import Footer from './Footer'
// import Meta from './Meta'

export default function Layout({ footer, children }) {
  return (
    <>
      {/* <Meta /> */}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        {footer && <Footer />}
      </div>
    </>
  )
}
