import React from "react";
import Link from "next/link";

import { GetServerSideProps } from "next";

import { InstagramFeed } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./popular.module.css";
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
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <span style={{ fontSize: "24px", fontWeight: 700 }}>요즘 핫한 전시회 ! 🫧</span>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {instagramFeed.map((i, index) => (
              <div
                className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 border border-gray-200 shadow-gray-100 shadow-lg"
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
