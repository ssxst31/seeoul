import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col } from "antd";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./popular.module.css";
import useInstagramReview from "hook/useInstagramReview";

const Review = () => {
  const router = useRouter();
  const { tab } = router.query;

  const sort = (tab ?? "exhibition") as string;
  const { totalInstagramReview } = useInstagramReview({ sort });

  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <span style={{ fontSize: "24px", fontWeight: 700 }}>인스타그램 후기 😎</span>
          <div>
            <Row justify="center" gutter={[8, 8]}>
              {totalInstagramReview?.map((a) => {
                if (a.children) {
                  return (
                    <Col key={a.id}>
                      <Link href={a.permalink} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                          <img src={a.children[0].media_url} width={237} height={237} />
                        </a>
                      </Link>
                    </Col>
                  );
                }
                if (a.mediaUrl) {
                  return (
                    <Col key={a.id}>
                      <img src={a.mediaUrl} width={237} height={237} />
                    </Col>
                  );
                }
              })}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
