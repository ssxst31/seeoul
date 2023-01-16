import React from "react";
import { NextSeo } from "next-seo";

interface DetailSEOProps {
  title: string;
  mainImg: string;
}

export default function DetailSEO({ title, mainImg }: DetailSEOProps) {
  const NEXT_SEO = {
    title: `${title} | 내일전시`,
    description: `${title} 서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.`,
    openGraph: {
      type: "website",
      title: `${title} | 내일전시`,
      description: `${title} 서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.`,
      images: [
        {
          url: mainImg,
          width: 300,
          height: 300,
          alt: title,
          type: "image/png",
        },
      ],
      siteName: "내일전시",
    },
    twitter: {
      site: "내일전시",
      cardType: "summary",
    },
  };

  return <NextSeo {...NEXT_SEO} />;
}
