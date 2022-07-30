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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="ssxst31"></meta>
        <meta
          name="description"
          content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요."
        ></meta>
        <meta
          name="keywords"
          content="내일전시,전시회,문화예술,서울전시,서울전시회"
        />
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
