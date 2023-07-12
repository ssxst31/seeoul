"use client";

import Link from "next/link";
import { InstagramFeed } from "type";

interface ContainerProps {
  instagramFeeds: InstagramFeed[];
}

export default function Container({ instagramFeeds }: ContainerProps) {
  return (
    <div>
      <div className="w-full h-8 -md:h-4" />
      <span className="text-2xl font-bold">요즘 핫한 전시회 ! 🫧</span>
      <div className="w-full h-8 -md:h-4" />
      <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -md:gap-y-4 -md:gap-x-4">
        {instagramFeeds.map((i, index) => (
          <div className="shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100" key={index}>
            <Link href={i.permalink} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full overflow-hidden h-96">
                <img
                  src={i.media_url}
                  alt={i.caption}
                  className="w-full h-full duration-100 ease-linear hover:scale-110"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
