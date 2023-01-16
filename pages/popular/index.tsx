import React from "react";
import Link from "next/link";
import Image from "next/image";

import { GetServerSideProps } from "next";
import { InstagramFeed } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import PopularSEO from "pages/popular/PopularSEO";
import { fetchInstagramFeed } from "pages/api";

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
        <div className="pt-[60px] px-[30px] -md:pt-[108px] -md:px-4">
          <div className="w-full h-8 -md:h-4" />
          <span className="text-2xl font-bold">요즘 핫한 전시회 ! 🫧</span>
          <div className="w-full h-8 -md:h-4" />
          <div className="grid grid-cols-1 gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 -md:gap-y-4 -md:gap-x-4">
            {instagramFeed.map((i, index) => (
              <div className="shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100" key={index}>
                <Link href={i.permalink} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="relative w-full overflow-hidden h-96">
                      <Image
                        src={i.media_url}
                        alt={i.caption}
                        layout="fill"
                        className="duration-100 ease-linear hover:scale-110"
                      />
                    </div>
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
