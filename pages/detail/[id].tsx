import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import { DiscussionEmbed } from "disqus-react";
import { GetServerSideProps } from "next";
import Link from "next/link";

import { fetchDetailCulturalEvent } from "pages/api/index";
import DetailSEO from "pages/detail/DetailSEO";
import { CulturalEvent } from "type";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import s from "./detail.module.css";

const ComponentsWithNoSSR = dynamic(
  () => import("components/Map"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const KakaoAdFit = dynamic(
  () => import("components/KakaoAdFit"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

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
    isMobile ? ins.setAttribute("data-ad-width", "300") : ins.setAttribute("data-ad-width", "728");
    isMobile ? ins.setAttribute("data-ad-height", "250") : ins.setAttribute("data-ad-height", "90");
    isMobile
      ? ins.setAttribute("data-ad-unit", "DAN-ncR6s1pAyuAZtN0w")
      : ins.setAttribute("data-ad-unit", "DAN-5fCtQtQI3q57O0n8");

    document.querySelector(".adfit")?.appendChild(ins);
    document.querySelector(".adfit")?.appendChild(scr);
  });

  const { mainImg, title, date, useTrgt, useFee, place, orgLink } = culturalEvent;

  return (
    <>
      <DetailSEO title={title} mainImg={mainImg} />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Header />
        <div className={s.mainLayout}>
          <div className={s.mobile}>
            <img className={s.detailImg} alt={title} src={mainImg} />
            <div className={s.detailBox}>
              <div className={s.detailText}>
                <div>
                  <span className={s.title}>{title}</span>
                </div>
                <div style={{ height: 16, width: "100%" }} />
                <div>
                  <span
                    className={s.text}
                    style={{
                      color: "grey",
                      fontWeight: 500,
                    }}
                  >
                    장소 :
                  </span>
                  <span className={s.text}>{place}</span>
                </div>
                <div style={{ height: 16, width: "100%" }} />
                <div>
                  <span
                    className={s.text}
                    style={{
                      color: "grey",
                      fontWeight: 500,
                    }}
                  >
                    기간 :
                  </span>
                  <span className={s.text}>{date}</span>
                </div>
                <div style={{ height: 16, width: "100%" }} />
                <div>
                  <span
                    className={s.text}
                    style={{
                      color: "grey",
                      fontWeight: 500,
                    }}
                  >
                    대상 :
                  </span>
                  <span className={s.text}>{useTrgt}</span>
                </div>
                <div style={{ height: 8, width: "100%" }} />
                <div>
                  <span
                    className={s.text}
                    style={{
                      color: "grey",
                      fontWeight: 500,
                    }}
                  >
                    요금 :
                  </span>
                  <span className={s.text}>{useFee}</span>
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
                    <Link href={orgLink} passHref>
                      <a target="_blank" rel="noopener noreferrer" style={{ color: "grey" }}>
                        사이트 바로가기
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
              <img className={s.detailMiniImg} alt={title} src={mainImg} />
            </div>
          </div>
          <div style={{ width: "100%", height: 60 }} />
          <ComponentsWithNoSSR searchPlace={place.split(" ")[0]} />
        </div>
        <div className={s.dd}>
          <button style={{ width: "100%", backgroundColor: "#5553ff", height: 45, color: "white" }}>
            <Link href={orgLink} passHref>
              <a target="_blank" rel="noopener noreferrer" style={{ color: "white", fontWeight: "bold" }}>
                예매하기
              </a>
            </Link>
          </button>
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
        <KakaoAdFit unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"} />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
