import React from "react";
import { NextSeo } from "next-seo";

interface BlogSEOProps {
  title: string;
}

export default function BlogSEO({ title }: BlogSEOProps) {
  const NEXT_SEO = {
    title: `${title} | 내일전시`,
  };

  return <NextSeo {...NEXT_SEO} />;
}