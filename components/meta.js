import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <title>Karrie Marie Baxley</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Karrie Marie Baxley`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
