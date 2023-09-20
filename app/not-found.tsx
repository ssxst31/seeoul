import Link from "next/link";

import DefaultLayout from "layouts/DefaultLayout";

export default function NotFound() {
  return (
    <DefaultLayout>
      <div className="text-center">
        <img src="/404.png" className="mx-auto" />
        <div className="text-indigo-600 text-9xl">404</div>
        <div className="mb-4 text-3xl font-bold">다시 한번 확인해주세요!</div>
        <div className="text-xl">
          지금 입력하신 페이지의 주소가 잘못 입력되었거나,
          <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해주세요.
        </div>
        <div className="w-full h-5" />
        <Link href="/">
          <button className="w-48 h-12 text-xl text-white bg-indigo-600 rounded-xl">메인으로 이동</button>
        </Link>
        <div className="w-full h-5" />
      </div>
    </DefaultLayout>
  );
}
