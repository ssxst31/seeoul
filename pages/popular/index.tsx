import React from "react";
import Link from "next/link";

import { GetServerSideProps } from "next";
import { InstagramFeed } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import PopularSEO from "pages/popular/PopularSEO";
import { fetchInstagramFeed } from "pages/api/index";

interface PopularProps {
  instagramFeed: InstagramFeed[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchInstagramFeed();

  return {
    props: {
      instagramFeed: data.data,
    },
  };
};

export default function Popular({ instagramFeed }: PopularProps) {
  if (!instagramFeed) {
    return <></>;
  }

  return (
    <>
      <PopularSEO />
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="pt-40 px-[30px] -md:pt-[200px] -md:px-4">
          <span className="text-2xl font-bold">요즘 핫한 전시회 ! 🫧</span>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {instagramFeed.map((i, index) => (
              <div
                className="w-full overflow-hidden border border-gray-200 shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100"
                key={index}
              >
                <Link href={i.permalink} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={i.media_url} height={390} width={390} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
