import React from "react";
import { NextSeo, OrganizationJsonLd } from "next-seo";

interface indexSEOProps {
  title: string;
}

export default function indexSEO({ title }: indexSEOProps) {
  const JSON_LD = {
    type: "Organization",
    name: "홈 - 내일전시",
    url: "https://seeoul.netlify.app",
    sameAs: [
      "https://www.instagram.com/seeou1",
      "https://twitter.com/seeou11",
      "https://www.facebook.com/profile.php?id=100083987572734",
    ],
  };

  const NEXT_SEO = {
    title: `${title} | 내일전시`,
  };

  return (
    <>
      <OrganizationJsonLd {...JSON_LD} />
      <NextSeo {...NEXT_SEO} />
    </>
  );
}
