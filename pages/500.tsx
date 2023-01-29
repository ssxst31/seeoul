import React from "react";
import Link from "next/link";

import Header from "layouts/Header";

const Error500 = () => {
  return (
    <>
      <Header />
      <div className="text-center pt-[165px]">
        <img src="/404.png" className="mx-auto" />
        <div className="text-indigo-600 text-9xl">500</div>
        <div className="mb-4 text-3xl font-bold">서비스 이용에 불편을 드려 죄송합니다.</div>
        <div className="text-xl">시스템 에러가 발생하여 페이지를 표시할 수 없습니다.</div>
        <div className="w-full h-5" />
        <Link href="/">
          <button className="w-48 h-12 text-xl text-white bg-indigo-600 rounded-xl">메인으로 이동</button>
        </Link>
        <div className="w-full h-5" />
      </div>
    </>
  );
};

export default Error500;
