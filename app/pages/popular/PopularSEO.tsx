import React from "react";
import { NextSeo } from "next-seo";

const PopularSEO = () => {
  const NEXT_SEO = {
    title: "인기전시회 | 내일전시",
    description: "내일전시. 요즘 인기있는 전시회 알아보기",
  };

  return <NextSeo {...NEXT_SEO} />;
};

export default PopularSEO;
