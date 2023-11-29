"use client";

import Script from "next/script";
import Image from "next/image";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShare({ title, img }: any) {
  const onShare = async () => {
    await window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        imageUrl: img,
        link: {
          mobileWebUrl: img,
          webUrl: img,
        },
      },
    });
  };

  const kakaoInit = () => {
    if (!window.Kakao.isInitialized()) window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  };

  return (
    <>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit} />
      <button onClick={onShare}>
        <Image src="/share.svg" alt={title} width={24} height={24} className="mt-2" />
      </button>
    </>
  );
}
