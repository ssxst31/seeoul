import React, { useState } from "react";
import { Pagination, Input } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import Script from "next/script";
import Head from "next/head";

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

  const idJsonObject = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "인기 전시회",
        description: "인기 전시회입니다.",
        url: "https://seeoul.netlify.app/popular",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "후기",
        description: "전시회 후기입니다.",
        url: `https://seeoul.netlify.app/review`,
      },
    ],
  };

  return (
    <>
      <Head>
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(idJsonObject) }} />
      </Head>
      <main className={s.mainLayout}>
        <section>
          <h2 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>전시회를 생각 중이라면 👀</h2>
          <div style={{ height: 16, width: "100%" }} />
          <MainCarousel />
        </section>
        <div style={{ height: 40, width: "100%" }} />
        <section>
          <div className={s.mobile}>
            <h2 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>
              여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧
            </h2>
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
        </section>
      </main>
    </>
  );
}
