"use client";

import React, { useState, use } from "react";

import { filterSort } from "utils/filterSort";
import MainArticle from "app/_component/MainArticle";
import Pagination from "app/_component/Pagination";
import { useFetchCulturalEvent } from "app/hooks/useFetchCulturalEvent";

import InputBox from "components/molecules/InputBox";

import { useSearchParams } from "next/navigation";

export default function MainSection({ dsa }: any) {
  console.log(dsa);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const tab = (searchParams.get("tab") ?? "total") as string;
  const sort = filterSort((tab as string) ?? "total");

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
    <>
      <div className="flex justify-between -md:flex-col">
        <h2 className="pb-[34px] text-2xl font-bold text-black dark:text-white linear2 h-[29px] self-start">
          여기서 골라보세요! 🫧
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
    </>
  );
}
