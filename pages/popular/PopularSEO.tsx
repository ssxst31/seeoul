import React from "react";
import { NextSeo } from "next-seo";

export default function PopularSEO() {
  const NEXT_SEO = {
    title: "인기전시회 | 내일전시",
  };

  return <NextSeo {...NEXT_SEO} />;
}
