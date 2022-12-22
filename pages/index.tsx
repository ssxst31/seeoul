import React from "react";
import Script from "next/script";
import Head from "next/head";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";

export default function HomepageLayout() {
  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "인기 전시회",
            description: "인기 전시회입니다.",
            url: "https://seeoul.netlify.app/popular",
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "후기",
            description: "전시회 후기입니다.",
            url: 'https://seeoul.netlify.app/review',
          },
    }
  `,
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
