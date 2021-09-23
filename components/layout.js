import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ footer, children }) {
  return (
    <>
      <Meta />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        {footer && <Footer />}
      </div>
    </>
  )
}
