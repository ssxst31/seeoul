import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import { filterSort } from "utils/filterSort";
import useFetchCulturalEvent from "hook/useFetchCulturalEvent";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";
import s from "components/main.module.css";
import Pagination from "components/Pagination";

const KakaoAdFit = dynamic(() => import("./KakaoAdFit"), { ssr: false });

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page ?? 1) as number;
  const tab = (query.tab ?? "total") as string;

  const sort = filterSort((query.tab as string) ?? "total");

  const [search, setSearch] = useState<string>("");
  const { totalCulturalEvent, totalCount, refresh } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  const handleSubmit = (e: any) => {
    setSearch(e.target.value);
  };

  function enterkey(e: any) {
    if (e.keyCode == 13) {
      handleSubmit(e);
    }
  }

  return (
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
            <div className="-md:w-auto w-full rounded-lg border border-purple-500 overflow-hidden ml-4">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full bg-white pl-2 text-base font-semibold outline-0"
                  placeholder=""
                  id=""
                  onKeyUp={enterkey}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 16, width: "100%" }} />
        <MainArticle totalCulturalEvent={totalCulturalEvent} />
        <div style={{ height: "20px" }} />
        <div style={{ textAlign: "center" }}>
          <Pagination totalPages={totalCount} page={page} tab={tab} />
        </div>
        <div style={{ height: "20px" }} />
        <div className={s.kakaoAdFitContainer}>
          <KakaoAdFit unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"} />
        </div>
        <div style={{ height: "20px" }} />
      </section>
    </main>
  );
}
