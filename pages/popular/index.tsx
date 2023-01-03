import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Row, Col } from "antd";
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
          <Row justify="center" gutter={[24, 24]}>
            {instagramFeed.map((i, index) => (
              <Col key={index}>
                <Link href={i.permalink} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={i.media_url} height={390} width={390} />
                  </a>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
