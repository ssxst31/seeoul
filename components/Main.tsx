import React, { useState } from "react";
import { useRouter } from "next/router";
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
        <h2 className="m-0 text-2xl font-bold">전시회를 생각 중이라면 👀</h2>
        <div className="w-full h-4" />
        <MainCarousel />
      </section>
      <div className="w-full h-10" />
      <section>
        <div className="flex justify-between -md:flex-col">
          <h2 className="m-0 text-2xl font-bold">여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className={s.searchContainer}
          >
            <div className="text-base">
              총&nbsp;
              <span className="font-bold text-indigo-600">{totalCount}</span>
              &nbsp;건
            </div>
            <div className="w-full ml-4 overflow-hidden border border-indigo-600 rounded-lg -md:w-auto">
              <div className="flex">
                <div className="flex items-center justify-center w-10 p-5 bg-white border-r border-gray-200 rounded-tl-lg rounded-bl-lg">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="absolute w-5 transition pointer-events-none fill-gray-500"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full pl-2 text-base bg-white outline-0"
                  placeholder="검색어를 입력해주세요."
                  onKeyUp={enterkey}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-4" />
        <MainArticle totalCulturalEvent={totalCulturalEvent} />
        <div className="h-5" />
        <div className="text-center">
          <Pagination totalPages={totalCount} page={page} tab={tab} />
        </div>
        <div className="h-5" />
        <div className={s.kakaoAdFitContainer}>
          <KakaoAdFit unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"} />
        </div>
        <div className="w-5" />
      </section>
    </main>
  );
}
