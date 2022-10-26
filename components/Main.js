import React, { useEffect, useState } from "react";
import { Row, Col, Pagination, Carousel, Select, Input } from "antd";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

import dynamic from "next/dynamic";

import CulturalEventCard from "components/CulturalEventCard";
import s from "components/main.module.css";

const Ad = dynamic(
  () => import("./ad"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const { Option } = Select;

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const { Search } = Input;
  const [totalCulturalEvent, setTotalCulturalEvent] = useState(null);
  const [filter, setFilter] = useState("전시/미술");
  const [searchData, setSearchData] = useState(null);
  const [data, setDate] = useState();
  const [totalData, setTotalDate] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const DEFAULT_PAGE = query.page ?? 1;

  const DEFAULT_LIMIT = Number(query.page) === 1 ? 20 : 19;

  const offset = (DEFAULT_PAGE - 1) * DEFAULT_LIMIT;

  const ewq = async () => {
    const res = await fetch(
      `http://openapi.seoul.go.kr:8088/73466d785563686c36364b58464c46/json/culturalEventInfo/${offset}/${
        offset + DEFAULT_LIMIT
      }/${decodeURI(filter)}`,
    );

    const data = await res.json();
    setDate(data.culturalEventInfo.row);
    setTotalAmount(data.culturalEventInfo.list_total_count);
  };

  const dsadsa = async () => {
    const res = await fetch(
      `http://openapi.seoul.go.kr:8088/73466d785563686c36364b58464c46/json/culturalEventInfo/0/900/${decodeURI(
        filter,
      )}`,
    );

    const data = await res.json();

    setTotalDate(data.culturalEventInfo.row);
  };

  useEffect(() => {
    dsadsa();
  }, [filter]);

  useEffect(() => {
    ewq();
  }, [filter, query.page]);

  if (!data || !totalData) {
    return <></>;
  }

  const randomNumber = Math.floor(Math.random() * data.length);

  function changePagination(activePage) {
    return router.push(`?page=${activePage}`);
  }

  const handleSubmit = (searchText) => {
    if (!searchText) {
      setSearchData(addedData.filter((el) => el.codename === filter));
      return;
    }

    const searchFilteredStreams = totalCulturalEvent.filter((el) => {
      const { title } = el;

      if (title && title.includes(searchText)) return true;
      return false;
    });

    setSearchData(searchFilteredStreams);
    router.push(`/`);
  };

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
    router.replace("/");
  };

  const handleClick = (id) => {
    router.push(`/detail/${id}`);
  };
  console.log(data);
  return (
    <div className={s.mainLayout}>
      <span style={{ fontSize: "24px" }}>추천 {filter}</span>
      <Carousel autoplay slidesToShow={isMobile ? 1 : 3}>
        {totalData.slice(randomNumber, randomNumber + 5).map((c) => (
          <div key={c.id}>
            <img
              onClick={() => {
                handleClick(c.id);
              }}
              className={s.pointer}
              src={isMobile ? c.MAIN_IMG.slice(0, -1) : c.MAIN_IMG}
              style={{
                borderRadius: 8,
                margin: "0 auto",
                maxHeight: 500,
                position: "relative",
              }}
              alt={c.TITLE}
            />
          </div>
        ))}
      </Carousel>
      <div style={{ height: 40, width: "100%" }} />
      <div className={s.mobile}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "24px" }}>Now {filter}</span>
          <div style={{ fontSize: 16 }}>
            총&nbsp;
            <span style={{ color: "#0096FF" }}>{totalAmount}</span>
            &nbsp;개
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: isMobile && "space-between",
          }}
        >
          <Search
            placeholder="검색어를 입력해주세요."
            style={{ width: 200, margin: isMobile ? "" : "0 10px" }}
            onSearch={handleSubmit}
          />
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
      <div style={{ height: 16, width: "100%" }} />
      <article>
        <Row justify="center" gutter={[8, 8]}>
          {data.map((c) => (
            <Col key={c.id} span={isMobile ? 10 : 6}>
              <CulturalEventCard culturalEvent={c} />
            </Col>
          ))}
        </Row>
      </article>
      <div style={{ height: "20px" }} />
      <div style={{ textAlign: "center" }}>
        <Pagination
          current={Number(DEFAULT_PAGE)}
          total={totalAmount}
          onChange={(e) => changePagination(e)}
          showSizeChanger={false}
          defaultPageSize={DEFAULT_LIMIT}
        />
      </div>
      <div style={{ height: "20px" }} />
      <div style={{ maxWidth: isMobile ? "300px" : "728px", margin: "0 auto" }}>
        <Ad unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"} />
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
