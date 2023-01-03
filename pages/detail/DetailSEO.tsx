import React from "react";
import { NextSeo } from "next-seo";

interface DetailSEOProps {
  title: string;
  mainImg: string;
}

export default function DetailSEO({ title, mainImg }: DetailSEOProps) {
  const NEXT_SEO = {
    title: `${title} | 내일전시`,
    openGraph: {
      type: "website",
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
  };

  return <NextSeo {...NEXT_SEO} />;
}
