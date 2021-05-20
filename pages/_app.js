import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { NavProvider } from "../context/NavContext";
import "../styles/index.css";
import "../styles/globals.css";
import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-56JGB7K" });
  }, []);

  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}

export default MyApp;
