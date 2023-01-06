import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7947339856088209"
            crossOrigin="anonymous"
          ></script>
          <meta name="NaverBot" content="All" />
          <meta name="NaverBot" content="index,follow" />
          <meta name="Yeti" content="All" />
          <meta name="Yeti" content="index,follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="내일전시" />
          <meta name="description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta
            name="keywords"
            content="내일전시, 전시회, 문화예술, 서울전시, 서울전시회, 전시정보, 전시회 추천, exhibition"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="내일전시" />
          <meta property="og:description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="내일전시" />
          <meta name="twitter:description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta name="twitter:domain" content="내일전시" />
          <meta name="google-site-verification" content="uF5xvolIVD9TIzGeXD9vVLNvnwHNg_Ksi--3WgmZpiI" />
          <meta name="naver-site-verification" content="5b5b59ee6b2ffa4da4adfa1467e7b6321410a63b" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
