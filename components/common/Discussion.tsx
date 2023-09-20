"use client";

import { DiscussionEmbed } from "disqus-react";

interface DiscussionProps {
  title: string;
}

export default function Discussion({ title }: DiscussionProps) {
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
