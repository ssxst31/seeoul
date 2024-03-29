import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBaseUrl } from "utils/getBaseUrl";
import { fetchDetailCulturalEvent, fetchCulturalEvents } from "api/culturalEvents";
import KaKaoMap from "components/kakao/KaKaoMap";
import KakaoShare from "app/detail/[detailSlug]/_components/KakaoShare";
import Discussion from "components/common/Discussion";
import { RenderedTimeAgo } from "components/RenderedTimeAgo";
import NaverBlogs from "app/detail/[detailSlug]/_components/NaverBlogs";

export async function generateStaticParams() {
  const page = "1";
  const sort = "전체";
  const search = undefined;
  const limit = 20;

  const res = (await fetch(
    `https://all-exhibition-ssxst31.koyeb.app/culturalEvents?offset=${(Number(page) - 1) * 20}&limit=${limit}&option=${
      sort === "전체" ? "all" : sort
    }&search=${search}`,
  )) as any;

  const data = (await res.json()) as any;

  const dsa = data.data.map((aa: any) => {
    return { detailSlug: aa.title };
  });
  return dsa;
}

interface Props {
  params: {
    detailSlug: string;
  };
}

export default async function Page({ params }: Props) {
  const title = params.detailSlug;

  const res = await fetch(`https://all-exhibition-ssxst31.koyeb.app/culturalEvents/${decodeURIComponent(title)}`, {
    next: { revalidate: 10 },
  });

  const data = await res.json();

  const culturalEvent = data[0];

  if (!culturalEvent) {
    notFound();
  }

  const { mainImg, date, useTrgt, useFee, place, orgLink, lng, lat } = culturalEvent;
  const descriptionList = [
    { title: "장소", value: place },
    { title: "기간", value: date },
    { title: "대상", value: useTrgt },
    { title: "요금", value: useFee },
  ];

  const image = mainImg.replace("&thumb=Y", "");

  return (
    <>
      <div className="relative">
        <div className="object-cover h-72 -md:hidden relative w-screen ml-[calc(-50vw+50%)]">
          <Image src={image} alt={culturalEvent.title} fill />
        </div>
        <div
          className="absolute top-0 h-72 -md:hidden w-screen ml-[calc(-50vw+50%)]"
          style={{
            backdropFilter: "blur(10px)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="px-[30px] w-full -md:pt-36 -md:px-4">
          <div className="flex -md:block">
            <div className="object-contain w-full max-w-[500px] -md:object-cover -md:w-[calc(100%+32px)] -md:max-w-none -md:ml-[-16px] -md:h-[360px] -mt-[35px] mr-5 relative">
              <Image src={image} alt={culturalEvent.title} objectFit="cover" layout="fill" />
            </div>
            <div className="-md:flex -md:w-[calc(100%+32px)] -md:mt-[-50px] -md:ml-[-16px] -md:relative bg-white -md:justify-between mt-5 dark:bg-dark-100">
              <div className="p-3">
                <h2 className="text-3xl font-bold">{culturalEvent.title}</h2>
                <div className="w-full h-2" />
                {descriptionList.map((description) => (
                  <div key={description.value}>
                    <span className="text-xl font-medium text-gray-500 -md:text-base">{description.title} : </span>
                    <span className="text-xl -md:text-base">{description.value}</span>
                    <div className="w-full h-2" />
                  </div>
                ))}
                <div className="-md:hidden">
                  <span className="text-xl font-medium text-gray-400 -md:text-base">
                    <Link href={orgLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-indigo-600 py-2 px-5 rounded-lg text-white text-sm">예매하기</button>
                    </Link>
                  </span>
                </div>
                <KakaoShare title={culturalEvent.title} img={image} />
              </div>
              <div className="hidden -md:mt-[-50px] -md:block -md:max-h-[120px] -md:object-contain -md:w-full -md:max-w-[120px] relative">
                <Image src={image} alt={culturalEvent.title} fill />
              </div>
            </div>
          </div>
          <div className="w-full h-[60px]" />
          <KaKaoMap lat={Number(lat)} lng={Number(lng)} />
          <Suspense fallback={<div />}>
            <div className="mt-5">
              {/* @ts-expect-error */}
              <NaverBlogs title={culturalEvent.title} />
            </div>
          </Suspense>
        </div>
        <div className="-md:bottom-0 hidden -md:block -md:fixed -md:w-full -md:z-[999999999]">
          <button className="w-full text-white bg-indigo-600 h-11">
            <Link href={orgLink} passHref>
              예매하기
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full h-2" />
      <RenderedTimeAgo timestamp={Date.now()} />
      <div className="mx-auto max-w-[1280px] px-[30px] -md:px-[16px]">
        <Discussion title={title} />
      </div>
      <div className="mx-auto -md:max-w-[300px] max-w-[728px]">
        {/* <KakaoAdFit unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"} /> */}
      </div>
    </>
  );
}
