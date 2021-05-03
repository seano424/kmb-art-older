import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ footer, preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      {footer && <Footer />}
    </>
  );
}
