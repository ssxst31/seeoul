import React, { useState } from "react";
import { Pagination, Select, Input } from "antd";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";

import useFetchCulturalEvent from "hook/useFetchCulturalEvent";
import s from "components/main.module.css";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";

const KakaoAdFit = dynamic(
  () => import("./KakaoAdFit"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const { Option } = Select;

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = query.page ?? 1;
  const { Search } = Input;
  const [sort, setSort] = useState("전체");
  const [search, setSearch] = useState("");
  const { totalCulturalEvent, totalCount } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  const DEFAULT_LIMIT = 20;

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
    setSort(v);
  };

  const handleSubmit = (text) => {
    setSearch(text);
  };

  return (
    <div className={s.mainLayout}>
      <span style={{ fontSize: "24px" }}>추천 예술</span>
      <MainCarousel />
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
          <span style={{ fontSize: "24px" }}>Now {sort}</span>
          <div style={{ fontSize: 16 }}>
            총&nbsp;
            <span style={{ color: "#0096FF" }}>{totalCount}</span>
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
            defaultValue={"전체"}
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
      <MainArticle totalCulturalEvent={totalCulturalEvent} />
      <div style={{ height: "20px" }} />
      <div style={{ textAlign: "center" }}>
        <Pagination
          current={Number(page)}
          total={totalCount}
          onChange={(e) => changePagination(e)}
          showSizeChanger={false}
          defaultPageSize={DEFAULT_LIMIT}
        />
      </div>
      <div style={{ height: "20px" }} />
      <div style={{ maxWidth: isMobile ? "300px" : "728px", margin: "0 auto" }}>
        <KakaoAdFit
          unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"}
        />
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
