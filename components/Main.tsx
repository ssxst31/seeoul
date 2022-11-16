import React, { useState } from "react";
import { Pagination, Input } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { isMobile } from "react-device-detect";

import useFetchCulturalEvent from "hook/useFetchCulturalEvent";
import s from "components/main.module.css";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";
import { filterTypeState } from "store/header";

const KakaoAdFit = dynamic(
  () => import("./KakaoAdFit"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page ?? 1);
  const { Search } = Input;
  const sort = useRecoilValue<string>(filterTypeState);

  const [search, setSearch] = useState("");
  const { totalCulturalEvent, totalCount } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  const DEFAULT_LIMIT = 20;

  const handleSubmit = (text) => {
    setSearch(text);
  };

  function itemRender(current, type, originalElement) {
    return <Link href={`/?page=${current}`}>{originalElement}</Link>;
  }

  return (
    <div className={s.mainLayout}>
      <span style={{ fontSize: "24px", fontWeight: 700 }}>
        전시회를 생각 중이라면 👀
      </span>
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
          <span style={{ fontSize: "24px", fontWeight: 700 }}>
            여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧
          </span>
          <div style={{ fontSize: 16 }}>
            총&nbsp;
            <span style={{ color: "#BD26FF", fontWeight: 700 }}>
              {totalCount}
            </span>
            &nbsp;건
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Search
            placeholder="검색어를 입력해주세요."
            style={{ width: 200, margin: "0 10px" }}
            onSearch={handleSubmit}
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
