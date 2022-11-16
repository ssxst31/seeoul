import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./popular.module.css";

import { fetchInstagramFeed } from "pages/api/index";

export const getServerSideProps = async () => {
  const data = await fetchInstagramFeed();

  return {
    props: {
      instagramFeed: data.data,
    },
  };
};

const Popular = ({ instagramFeed }) => {
  if (!instagramFeed) {
    return <></>;
  }

  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
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
};

export default Popular;
