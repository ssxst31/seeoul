import React from "react";
import { useRouter } from "next/router";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./popular.module.css";
import useInstagramReview from "hook/useInstagramReview";

const Review = () => {
  const router = useRouter();
  const { tab } = router.query;

  const sort = (tab ?? "exhibition") as string;
  const { totalInstagramReview } = useInstagramReview({ sort });

  if (!totalInstagramReview) {
    return <></>;
  }

  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <span style={{ fontSize: "24px", fontWeight: 700 }}>
            인스타그램 후기 😎
          </span>
          <div>
            {totalInstagramReview.map((a) => {
              if (a.children) {
                return (
                  <img src={a.children[0].media_url} width={200} height={200} />
                );
              }
              return <img src={a.mediaUrl} width={200} height={200} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
