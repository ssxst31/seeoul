import React from "react";
import { NextSeo } from "next-seo";

const ReviewSEO = () => {
  const NEXT_SEO = {
    title: "후기 | 내일전시",
    description: "내일전시. 요즘 인스타에서 핫한 후기",
  };

  return <NextSeo {...NEXT_SEO} />;
};

export default ReviewSEO;
