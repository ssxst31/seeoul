import React from "react";
import Link from "next/link";

import Header from "layouts/Header";

const Error404 = () => {
  return (
    <>
      <Header />
      <div className="text-center pt-[165px]">
        <img src="/404.png" className="mx-auto" />
        <div className="text-indigo-600 text-9xl">404</div>
        <div className="text-3xl ">죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</div>
        <div className="text-xl">
          페이지의 주소가 잘못 입력되었거나, 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </div>
        <div className="w-full h-5" />
        <Link href="/">
          <button className="text-3xl text-white bg-indigo-600 rounded-xl w-[300px] h-20">Go HOME</button>
        </Link>
        <div className="w-full h-5" />
      </div>
    </>
  );
};

export default Error404;
