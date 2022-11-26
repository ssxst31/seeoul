import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>내일전시</title>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7947339856088209"
            crossOrigin="anonymous"
          />
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=035efa5d385b322c6ad156a471745c81&libraries=services&autload=false"
          />
          <script type="module" src="src/main.js" />
          <meta name="NaverBot" content="All" />
          <meta name="NaverBot" content="index,follow" />
          <meta name="Yeti" content="All" />
          <meta name="Yeti" content="index,follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="ssxst31" />
          <meta name="description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta name="keywords" content="내일전시,전시회,문화예술,서울전시,서울전시회" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="내일전시" />
          <meta property="og:description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="내일전시" />
          <meta name="twitter:description" content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요." />
          <meta name="twitter:domain" content="내일전시" />
          <meta name="google-site-verification" content="uF5xvolIVD9TIzGeXD9vVLNvnwHNg_Ksi--3WgmZpiI" />
          <meta name="naver-site-verification" content="5b5b59ee6b2ffa4da4adfa1467e7b6321410a63b" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
