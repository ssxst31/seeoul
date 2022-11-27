import React, { useState } from "react";
import { Pagination, Input } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import { filterSort } from "utils/filterSort";
import useFetchCulturalEvent from "hook/useFetchCulturalEvent";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";
import s from "components/main.module.css";

const KakaoAdFit = dynamic(() => import("./KakaoAdFit"), { ssr: false });

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page ?? 1) as number;
  const tab = (query.tab ?? "total") as string;
  const { Search } = Input;

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

  function itemRender(current: Number, type: any, originalElement: any) {
    return <Link href={`?tab=${tab}&page=${current}`}>{originalElement}</Link>;
  }

  return (
    <div className={s.mainLayout}>
      <span style={{ fontSize: "24px", fontWeight: 700 }}>전시회를 생각 중이라면 👀</span>
      <div style={{ height: 16, width: "100%" }} />
      <MainCarousel />
      <div style={{ height: 40, width: "100%" }} />
      <div className={s.mobile}>
        <span style={{ fontSize: "24px", fontWeight: 700 }}>여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          className={s.searchContainer}
        >
          <div style={{ fontSize: 16 }}>
            총&nbsp;
            <span style={{ color: "#BD26FF", fontWeight: 700 }}>{totalCount}</span>
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
        <KakaoAdFit unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"} />
      </div>
      <div style={{ height: "20px" }} />
    </div>
  );
}
