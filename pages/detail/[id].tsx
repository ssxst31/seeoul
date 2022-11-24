import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import { DiscussionEmbed } from "disqus-react";

import { fetchDetailCulturalEvent } from "pages/api/index";
import { CulturalEvent } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./detail.module.css";

export const getServerSideProps: GetServerSideProps<{
  culturalEvent: CulturalEvent;
}> = async ({ params }: any) => {
  const id = params.id;
  const data = await fetchDetailCulturalEvent({ id });

  return {
    props: {
      culturalEvent: data[0],
    },
  };
};

const ComponentsWithNoSSR = dynamic(
  () => import("components/Map"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const KakaoAdFit = dynamic(
  () => import("components/KakaoAdFit"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);
interface DetailProps {
  culturalEvent: CulturalEvent;
}

const Detail = ({ culturalEvent }: DetailProps) => {
  useEffect(() => {
    let ins = document.createElement("ins") as any;
    let scr = document.createElement("script") as any;

    ins.className = "kakao_ad_area";
    ins.style = isMobile ? "display:none;" : "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    isMobile
      ? ins.setAttribute("data-ad-width", "300")
      : ins.setAttribute("data-ad-width", "728");
    isMobile
      ? ins.setAttribute("data-ad-height", "250")
      : ins.setAttribute("data-ad-height", "90");
    isMobile
      ? ins.setAttribute("data-ad-unit", "DAN-ncR6s1pAyuAZtN0w")
      : ins.setAttribute("data-ad-unit", "DAN-5fCtQtQI3q57O0n8");

    document.querySelector(".adfit")?.appendChild(ins);
    document.querySelector(".adfit")?.appendChild(scr);
  });

  if (!culturalEvent) {
    return <div />;
  }

  const { mainImg, title, date, useTrgt, useFee, place, orgLink } =
    culturalEvent;

  return (
    <>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <div className={s.mobile}>
            <img
              alt={title}
              src={mainImg}
              style={{ objectFit: "contain", width: "100%", maxWidth: 500 }}
            />
            <div>
              <div>
                <span style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700 }}>
                  {title}
                </span>
              </div>
              <div style={{ height: 16, width: "100%" }} />
              <div>
                <span
                  style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "grey",
                    fontWeight: 500,
                  }}
                >
                  장소 :
                </span>
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{place}</span>
              </div>
              <div style={{ height: 16, width: "100%" }} />
              <div>
                <span
                  style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "grey",
                    fontWeight: 500,
                  }}
                >
                  기간 :
                </span>
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{date}</span>
              </div>
              <div style={{ height: 16, width: "100%" }} />
              <div>
                <span
                  style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "grey",
                    fontWeight: 500,
                  }}
                >
                  대상 :
                </span>
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{useTrgt}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span
                  style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "grey",
                    fontWeight: 500,
                  }}
                >
                  요금 :
                </span>
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{useFee}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span
                  style={{
                    fontSize: isMobile ? 16 : 20,
                    color: "grey",
                    fontWeight: 500,
                  }}
                >
                  <a href={orgLink}>사이트 바로가기</a>
                </span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: 60 }} />
          <ComponentsWithNoSSR searchPlace={place.split(" ")[0]} />
        </div>
      </div>
      <div
        style={{
          maxWidth: isMobile ? "300px" : "1250px",
          margin: "0 auto",
          width: "100%",
        }}
      >
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
      <div style={{ maxWidth: isMobile ? "300px" : "728px", margin: "0 auto" }}>
        <KakaoAdFit
          unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
