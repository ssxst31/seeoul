import React from "react";
import { DefaultSeo } from "next-seo";

const DefaultSEO = () => {
  return (
    <DefaultSeo
      title="내일전시 | 홈"
      description="서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요."
      openGraph={{
        type: "website",
        title: "내일전시 | 홈",
        description: "서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.",
        siteName: "내일전시",
      }}
      twitter={{
        site: "내일전시",
        cardType: "summary",
      }}
    />
  );
};

export default DefaultSEO;
