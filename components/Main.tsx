import React, { useState } from "react";
import { Pagination, Input } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import useFetchCulturalEvent from "hook/useFetchCulturalEvent";
import s from "components/main.module.css";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";

const KakaoAdFit = dynamic(
  () => import("./KakaoAdFit"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page ?? 1) as number;
  const tab = (query.tab ?? "total") as string;
  const { Search } = Input;

  const filterSort = (sort: string) => {
    if (sort === "total") {
      return "전체";
    }
    if (sort === "exhibition") {
      return "전시/미술";
    }
    if (sort === "classic") {
      return "클래식";
    }
    if (sort === "concert") {
      return "콘서트";
    }
    if (sort === "festival") {
      return "축제-문화/예술";
    }
    if (sort === "music") {
      return "국악";
    }
    if (sort === "culture") {
      return "문화교양/강좌";
    }
    if (sort === "opera") {
      return "뮤지컬/오페라";
    }
    if (sort === "dancing") {
      return "무용";
    }
    if (sort === "theater") {
      return "연극";
    }
    if (sort === "etc") {
      return "기타";
    }
    return "total";
  };

  const sort = filterSort((query.tab as string) ?? "total");

  const [search, setSearch] = useState<string>("");
  const { totalCulturalEvent, totalCount } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  const DEFAULT_LIMIT = 20;

  const handleSubmit = (text: string) => {
    setSearch(text);
  };

  function itemRender(current, type, originalElement) {
    return <Link href={`?tab=${tab}&page=${current}`}>{originalElement}</Link>;
  }

  return (
    <div className={s.mainLayout}>
      <span style={{ fontSize: "24px", fontWeight: 700 }}>
        전시회를 생각 중이라면 👀
      </span>
      <MainCarousel />
      <div style={{ height: 40, width: "100%" }} />
      <div className={s.mobile}>
        <span style={{ fontSize: "24px", fontWeight: 700 }}>
          여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={s.searchContainer}
        >
          <div style={{ fontSize: 16 }}>
            총&nbsp;
            <span style={{ color: "#BD26FF", fontWeight: 700 }}>
              {totalCount}
            </span>
            &nbsp;건
          </div>
          <Search
            placeholder="검색어를 입력해주세요."
            style={{ width: 200 }}
            onSearch={handleSubmit}
            className={s.search}
          />
        </div>
      </div>
      <div style={{ height: 16, width: "100%" }} />
      <MainArticle totalCulturalEvent={totalCulturalEvent} />
      <div style={{ height: "20px" }} />
      <div style={{ textAlign: "center" }}>
        <Pagination
          current={Number(page)}
          total={totalCount}
          showSizeChanger={false}
          defaultPageSize={DEFAULT_LIMIT}
          itemRender={itemRender}
        />
      </div>
      <div style={{ height: "20px" }} />
      <div className={s.kakaoAdFitContainer}>
        <KakaoAdFit
          unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"}
        />
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
