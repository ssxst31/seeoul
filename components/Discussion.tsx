"use client";

import { DiscussionEmbed } from "disqus-react";

export default function Discussion({ title }: any) {
  return (
    <DiscussionEmbed
      shortname="seeoul"
      config={{
        url: "https://seeoul.netlify.app/",
        identifier: "1",
        title: title,
        language: "ko",
      }}
    />
  );
}
