import React from "react";

export default function ApiError({ onClickRetry }: any) {
  return (
    <div className="flex flex-col mx-auto text-center w-96">
      <span className="text-2xl text-black">잠시 후 다시 시도해주세요</span>
      <span className="text-gray-500 ">요청사항을 처리하는데 실패했습니다.</span>
      <div className="w-full h-2 " />
      <button onClick={onClickRetry} className="h-10 text-xl text-white bg-indigo-600 rounded-md">
        다시 시도
      </button>
    </div>
  );
}
