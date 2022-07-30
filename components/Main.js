import React, { useEffect, useState } from "react";
import { Row, Col, Pagination, Carousel } from "antd";
import { useRouter } from "next/router";

import data from "pages/api/data.json";
import CulturalEventCard from "components/CulturalEventCard";

export default function Main() {
  const router = useRouter();
  const [totalCulturalEvent, setTotalCulturalEvent] = useState(null);

  const [limit, setLimit] = useState(20);

  const offset = (router.query.page - 1) * limit;

  useEffect(() => {
    setTotalCulturalEvent(data.DATA);
  }, []);

  console.log(totalCulturalEvent);

  if (!totalCulturalEvent) {
    return <>d</>;
  }

  const randomNumber = Math.floor(Math.random() * totalCulturalEvent.length);

  function changePagination(activePage) {
    return router.push(`?page=${activePage}`);
  }

  return (
    <div style={{ paddingTop: 80, width: "100%" }}>
      <span style={{ fontSize: "24px" }}>추천 전시</span>
      <Carousel autoplay slidesToShow={3}>
        {totalCulturalEvent.slice(randomNumber, randomNumber + 5).map((c) => (
          <div>
            <img
              src={c.main_img}
              style={{ borderRadius: 8, margin: "0 auto" }}
            />
          </div>
        ))}
      </Carousel>
      <div style={{ height: 40, width: "100%" }} />
      <span style={{ fontSize: "24px" }}>Now 전시</span>
      <Row justify="center" gutter={[16, 8]}>
        {totalCulturalEvent.slice(offset, offset + limit).map((c, index) => (
          <Col key={index} span={200}>
            <CulturalEventCard culturalEvent={c} />
          </Col>
        ))}
      </Row>
      <div style={{ height: "20px" }} />
      <Pagination
        current={Number(router.query.page)}
        total={Math.ceil(totalCulturalEvent.length / 20)}
        onChange={(e) => changePagination(e)}
        showSizeChanger={false}
      />
      <div style={{ height: "20px" }} />
    </div>
  );
}
