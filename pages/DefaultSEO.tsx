import React from "react";
import { DefaultSeo } from "next-seo";

export default function DefaultSEO({ canonical = "" }) {
  return (
    <DefaultSeo
      title="내일전시 | 홈"
      description="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요."
      canonical={canonical}
      openGraph={{
        type: "website",
        title: "내일전시 | 홈",
        description: "서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.",
        url: canonical,
        siteName: "내일전시",
      }}
      twitter={{
        site: "내일전시",
        cardType: "summary",
      }}
    />
  );
}
