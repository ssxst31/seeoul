import React from "react";
import Script from "next/script";
import Head from "next/head";

import Main from "components/Main";
import DefaultLayout from "layouts/DefaultLayout";

export default function HomepageLayout() {
  const content = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "홈 - 내일전시",
    url: "https://seeoul.netlify.app",
    sameAs: [
      "https://www.instagram.com/seeou1",
      "https://twitter.com/seeou11",
      "https://www.facebook.com/profile.php?id=100083987572734",
    ],
  };

  return (
    <>
      <DefaultLayout>
        <Head>
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(content),
            }}
          />
        </Head>
        <Main />
      </DefaultLayout>
    </>
  );
}
