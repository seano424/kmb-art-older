import "../styles/index.css";
import "../styles/globals.css";
import { NavProvider, NavContext } from "../context/NavContext";
import { useEffect, useContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}

export default MyApp;
