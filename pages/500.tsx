import React from "react";
import Link from "next/link";

import Header from "layouts/Header";

export default function Error500() {
  return (
    <>
      <Header />
      <div className="text-center pt-[200px]">
        <img src="/404.png" />
        <div className="text-indigo-400 text-9xl">404</div>
        <div className="text-3xl ">서비스 이용에 불편을 드려 죄송합니다.</div>
        <div className="text-xl">시스템 에러가 발생하여 페이지를 표시할 수 없습니다.</div>
        <div className="w-full h-5" />
        <Link href="/">
          <button className="text-3xl text-white bg-indigo-600 rounded-xl w-[300px] h-20">Go HOME</button>
        </Link>
        <div className="w-full h-5" />
      </div>
    </>
  );
}
