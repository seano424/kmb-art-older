import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ footer, preview, children }) {
  return (
    <>
      <Meta />
      <div className="flex min-h-screen flex-col">
        <main>{children}</main>
        {footer && <Footer />}
      </div>
    </>
  );
}

// .Site {
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
// }

// .Site-content {
//   flex: 1;
// }
