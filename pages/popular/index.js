import React from "react";

import Link from "next/link";
import useFetchInstagramFeed from "hook/useFetchInstagramFeed";
import { Row, Col } from "antd";
import { isMobile } from "react-device-detect";
import Header from "components/Header";
import Footer from "components/Footer";
import s from "./popular.module.css";
import Image from "next/image";

const Popular = () => {
  const instagramFeed = useFetchInstagramFeed();

  console.log(instagramFeed);
  if (!instagramFeed) {
    return <></>;
  }
  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <Row justify="center" gutter={[32, 32]}>
            {instagramFeed.map((i, index) => (
              <Col key={index} span={isMobile ? 10 : 6}>
                <Link href={i.permalink} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={i.media_url} height={500} width={500} />
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
