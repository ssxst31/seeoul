"use client";

import DefaultLayout from "layouts/DefaultLayout";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <DefaultLayout>
          <div className="text-center">
            <img src="/404.png" className="mx-auto" />
            <div className="mb-4 text-3xl font-bold">에러가 발생했습니다.</div>
            <div className="text-xl">페이지를 새로고침 해주시거나, 다시 시도해주세요</div>
            <div className="w-full h-5" />
            <button className="w-48 h-12 text-xl text-white bg-indigo-600 rounded-xl" onClick={() => reset()}>
              다시 시도
            </button>
            <div className="w-full h-5" />
          </div>
        </DefaultLayout>
      </body>
    </html>
  );
}
