import React, { useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { RecoilRoot } from "recoil";

import type { AppProps } from "next/app";
import * as gtag from "lib/gtag";
import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/override.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  let typedRouter = Router as any;

  typedRouter.onRouteChangeStart = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.start();
  };

  typedRouter.onRouteChangeComplete = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  typedRouter.onRouteChangeError = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  return (
    <>
      <Head>
        <title>내일전시</title>
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
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
          crossOrigin="anonymous"
        ></script>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="내일전시"></meta>
        <meta
          property="og:description"
          content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요."
        ></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="내일전시"></meta>
        <meta
          name="twitter:description"
          content="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요."
        ></meta>
        <meta name="twitter:domain" content="내일전시"></meta>
        <meta
          name="google-site-verification"
          content="uF5xvolIVD9TIzGeXD9vVLNvnwHNg_Ksi--3WgmZpiI"
        />
        <meta
          name="naver-site-verification"
          content="5b5b59ee6b2ffa4da4adfa1467e7b6321410a63b"
        />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=035efa5d385b322c6ad156a471745c81&libraries=services&autload=false"
        />
        <script type="module" src="src/main.js" />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
