import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { DiscussionEmbed } from "disqus-react";

import { GetServerSideProps, NextPage } from "next";

import { fetchDetailCulturalEvent } from "pages/api/culturalEvents";
import DetailSEO from "pages/detail/DetailSEO";
import { CulturalEvent } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

const ComponentsWithNoSSR = dynamic(() => import("components/kakao/KaKaoMap"), { ssr: false });
const KakaoAdFit = dynamic(() => import("components/kakao/KakaoAdFit"), { ssr: false });

export const getServerSideProps: GetServerSideProps<{
  culturalEvent: CulturalEvent;
}> = async (context) => {
  const title = context.params?.title;

  const data = await fetchDetailCulturalEvent({ title });

  return {
    props: {
      culturalEvent: data[0],
    },
  };
};

interface DetailProps {
  culturalEvent: CulturalEvent;
}

const Detail: NextPage<DetailProps> = ({ culturalEvent }) => {
  useEffect(() => {
    let ins = document.createElement("ins") as any;
    let scr = document.createElement("script") as any;

    ins.className = "kakao_ad_area";
    ins.style = isMobile ? "display:none;" : "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    isMobile ? ins.setAttribute("data-ad-width", "300") : ins.setAttribute("data-ad-width", "728");
    isMobile ? ins.setAttribute("data-ad-height", "250") : ins.setAttribute("data-ad-height", "90");
    isMobile
      ? ins.setAttribute("data-ad-unit", "DAN-ncR6s1pAyuAZtN0w")
      : ins.setAttribute("data-ad-unit", "DAN-5fCtQtQI3q57O0n8");

    document.querySelector(".adfit")?.appendChild(ins);
    document.querySelector(".adfit")?.appendChild(scr);
  });

  const { mainImg, title, date, useTrgt, useFee, place, orgLink } = culturalEvent;
  const image = culturalEvent.mainImg.replace("&thumb=Y", "");

  const descriptionList = [
    { title: "장소", value: place },
    { title: "기간", value: date },
    { title: "대상", value: useTrgt },
    { title: "요금", value: useFee },
  ];

  return (
    <>
      <DetailSEO title={title} mainImg={mainImg} />
      <div className="relative">
        <div className="object-cover h-72 mt-[61px] -md:hidden relative">
          <Image src={image} alt={title} objectFit="cover" layout="fill" />
        </div>
        <div
          className="absolute top-0 w-full h-72 -md:hidden"
          style={{
            backdropFilter: "blur(10px)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="px-[30px] w-full -md:pt-36 -md:px-4">
          <div className="flex -md:block">
            <div className="object-contain w-full max-w-[500px] -md:object-cover -md:w-[calc(100%+32px)] -md:max-w-none -md:ml-[-16px] -md:h-[360px] -mt-[35px] mr-5 relative">
              <Image src={image} alt={title} objectFit="cover" layout="fill" />
            </div>
            <div className="-md:flex -md:w-[calc(100%+32px)] -md:mt-[-50px] -md:ml-[-16px] -md:relative bg-white -md:justify-between mt-5 dark:bg-dark-100">
              <div className="p-3">
                <div>
                  <span className="text-3xl font-bold">{title}</span>
                </div>
                <div className="w-full h-2" />
                {descriptionList.map((description) => (
                  <div>
                    <span className="text-xl font-medium text-gray-400 -md:text-base">{description.title} :</span>
                    <span className="text-xl -md:text-base">{description.value}</span>
                    <div className="w-full h-2" />
                  </div>
                ))}
                <div>
                  <span className="text-xl font-medium text-gray-400 -md:text-base">
                    <Link href={orgLink} target="_blank" rel="noopener noreferrer">
                      <span className="text-gray-400">사이트 바로가기</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="hidden -md:mt-[-50px] -md:block -md:max-h-[120px] -md:object-contain -md:w-full -md:max-w-[120px] relative">
                <Image src={image} alt={title} objectFit="contain" layout="fill" />
              </div>
            </div>
          </div>
          <div className="w-full h-[60px]" />
          <ComponentsWithNoSSR searchPlace={place.split(" ")[0]} />
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
      <div className="mx-auto max-w-[1280px] px-[30px] -md:px-[16px]">
        <DiscussionEmbed
          shortname="seeoul"
          config={{
            url: "https://seeoul.netlify.app/",
            identifier: "1",
            title: title,
            language: "ko",
          }}
        />
      </div>
      <div className="mx-auto -md:max-w-[300px] max-w-[728px]">
        <KakaoAdFit unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"} />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
