import React from "react";
import Script from "next/script";
import Head from "next/head";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";

export default function HomepageLayout() {
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "플렉스티비 - FLEXTV 공식 사이트",
        "url": "https://www.flextv.co.kr",
        "sameAs": [
          "https://www.instagram.com/flextv_official/",
          "https://www.youtube.com/@flex_tv",
          "https://play.google.com/store/apps/details?id=com.flexenm.flextv",
          "https://apps.apple.com/kr/app/%ED%94%8C%EB%A0%89%EC%8A%A4%ED%8B%B0%EB%B9%84/id1559837920",
          "https://play.google.com/store/apps/details?id=kr.co.flextv.streamer",
          "https://www.tiktok.com/@official_flextv"
        ]
      }`,
    };
  }
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={addProductJsonLd()} key="product-jsonld" />
      </Head>
      <DefaultLayout>
        <Main />
      </DefaultLayout>
    </>
  );
}
