import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { NextPage } from "next";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import { useInstagramReview } from "hooks/useInstagramReview";
import ReviewSEO from "pages/review/ReviewSEO";

const Review: NextPage = () => {
  const router = useRouter();
  const { tab } = router.query;
  const sort = (tab ?? "exhibition") as string;

  const { totalInstagramReview } = useInstagramReview({ sort });

  return (
    <>
      <ReviewSEO />
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="pt-[60px] px-[30px] -md:pt-[108px] -md:px-4">
          <h2 className="text-2xl font-bold">인스타그램 후기 😎</h2>
          <div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {totalInstagramReview?.map((a) => {
                if (a.children) {
                  return (
                    <div
                      className="w-full overflow-hidden border border-gray-200 shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100"
                      key={a.id}
                    >
                      <Link href={a.permalink} target="_blank" rel="noopener noreferrer">
                        <img src={a.children[0].media_url} width={237} height={237} />
                      </Link>
                    </div>
                  );
                }
                if (a.mediaUrl) {
                  return (
                    <div
                      className="w-full overflow-hidden border border-gray-200 shadow-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 shadow-gray-100"
                      key={a.id}
                    >
                      <img src={a.mediaUrl} width={237} height={237} />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
