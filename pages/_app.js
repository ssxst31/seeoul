import React from "react";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/override.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>내일전시</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7947339856088209"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
