import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import { filterSort } from "utils/filterSort";
import useFetchCulturalEvent from "hooks/useFetchCulturalEvent";
import MainCarousel from "components/MainCarousel";
import MainArticle from "components/MainArticle";
import Pagination from "components/Pagination";
import InputBox from "components/molecules/InputBox";

const KakaoAdFit = dynamic(() => import("components/KakaoAdFit"), { ssr: false });

export default function Main() {
  const router = useRouter();
  const { query } = router;
  const page = Number(query.page ?? 1) as number;
  const tab = (query.tab ?? "total") as string;

  const sort = filterSort((query.tab as string) ?? "total");

  const [search, setSearch] = useState<string | undefined>(undefined);

  const { totalCulturalEvent, totalCount } = useFetchCulturalEvent({
    page,
    sort,
    search,
  });

  const handleSubmit = (e: any) => {
    setSearch(e.target.value);
  };

  function enterkey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode == 13) {
      handleSubmit(e);
    }
  }

  return (
    <main className="pt-[132px] px-[30px] w-full -md:px-4 -md:pt-[165px]">
      <section>
        <h2 className="m-0 text-2xl font-bold text-black dark:text-white linear2">전시회를 생각 중이라면 👀</h2>
        <div className="w-full h-8 -md:h-4" />
        <MainCarousel />
      </section>
      <div className="w-full h-10" />
      <section>
        <div className="flex justify-between -md:flex-col">
          <h2 className="m-0 text-2xl font-bold text-black dark:text-white linear2 h-[29px] self-start">
            여기서 바로 {sort === "전체" && ""} 골라보세요! 🫧
          </h2>
          <div className="hidden w-full -md:h-4 -md:block" />
          <div className="flex items-center -md:justify-between">
            <div className="gradient">
              총&nbsp;
              <span className="font-bold ">{totalCount}</span>
              &nbsp;건
            </div>
            <div className="w-full ml-4 overflow-hidden border border-indigo-600 rounded-lg -md:w-auto">
              <InputBox enterkey={enterkey} />
            </div>
          </div>
        </div>
        <div className="w-full h-8 -md:h-4" />
        <MainArticle totalCulturalEvent={totalCulturalEvent} />
        <div className="w-full h-8" />
        <div className="text-center">
          <Pagination totalPages={Math.ceil(totalCount / 20)} page={page} tab={tab} />
        </div>
        <div className="w-full h-8" />
        <div className="max-w-[728px] mx-auto overflow-x-hidden -md:max-w-[300px]">
          <KakaoAdFit unit={isMobile ? "DAN-NrbIqcNVQklTs9ND" : "DAN-zwtZjOswNyJO6kQA"} />
        </div>
        <div className="w-full h-8" />
      </section>
    </main>
  );
}
