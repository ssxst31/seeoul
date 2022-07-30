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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
