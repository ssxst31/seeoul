import React, { useEffect, useState } from "react";
import { Row, Col, Pagination, Carousel, Select } from "antd";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import data from "pages/api/data.json";
import CulturalEventCard from "components/CulturalEventCard";

const { Option } = Select;

export default function Main() {
  const router = useRouter();
  const { query } = router;

  const [totalCulturalEvent, setTotalCulturalEvent] = useState(null);
  const [filter, setFilter] = useState("전시/미술");

  const DEFAULT_PAGE = query.page ?? 1;
  const DEFAULT_LIMIT = 20;

  const offset = (DEFAULT_PAGE - 1) * DEFAULT_LIMIT;

  useEffect(() => {
    const addedData = data.DATA.map((el, index) => {
      return { ...el, id: index };
    });

    const ewq = addedData.filter((el) => el.codename === filter);

    setTotalCulturalEvent(ewq);
    router.push(`/`);
  }, [filter]);

  if (!totalCulturalEvent) {
    return <div />;
  }

  const randomNumber = Math.floor(Math.random() * totalCulturalEvent.length);

  function changePagination(activePage) {
    return router.push(`?page=${activePage}`);
  }

  const provinceData = [
    "전시/미술",
    "클래식",
    "콘서트",
    "축제-문화/예술",
    "축제-전통/역사",
    "국악",
    "문화교양/강좌",
    "뮤지컬/오페라",
    "무용",
    "연극",
    "기타",
  ];

  const handleProvinceChange = (v) => {
    setFilter(v);
  };

  const handleClick = (id) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div style={{ paddingTop: 80, width: "100%" }}>
      <span style={{ fontSize: "24px" }}>추천 {filter}</span>
      <Carousel autoplay slidesToShow={isMobile ? 1 : 3}>
        {totalCulturalEvent.slice(randomNumber, randomNumber + 5).map((c) => (
          <div
            onClick={() => {
              handleClick(c.id);
            }}
          >
            <img
              src={c.main_img}
              style={{ borderRadius: 8, margin: "0 auto" }}
              alt={c.title}
            />
          </div>
        ))}
      </Carousel>
      <div style={{ height: 40, width: "100%" }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "24px" }}>Now {filter}</span>
        <div>
          <span>
            총
            <span style={{ color: "#0096FF" }}>
              {totalCulturalEvent.length}
            </span>
            개
          </span>
          <Select
            defaultValue={provinceData[0]}
            style={{
              width: 120,
            }}
            onChange={handleProvinceChange}
          >
            {provinceData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
        </div>
      </div>
      <Row justify="center" gutter={[8, 8]}>
        {totalCulturalEvent.slice(offset, offset + DEFAULT_LIMIT).map((c) => (
          <Col key={c.id}>
            <CulturalEventCard culturalEvent={c} />
          </Col>
        ))}
      </Row>
      <div style={{ height: "20px" }} />
      <Pagination
        current={Number(DEFAULT_PAGE)}
        total={totalCulturalEvent.length}
        onChange={(e) => changePagination(e)}
        showSizeChanger={false}
        defaultPageSize={DEFAULT_LIMIT}
      />
      <div style={{ height: "20px" }} />
    </div>
  );
}
