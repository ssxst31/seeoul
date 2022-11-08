import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";
import { DiscussionEmbed } from "disqus-react";
import axios from "axios";

import Header from "components/Header";
import Footer from "components/Footer";
import s from "./detail.module.css";

const ComponentsWithNoSSR = dynamic(
  () => import("components/Map"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const Ad = dynamic(
  () => import("components/ad"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [culturalEvent, setCulturalEvent] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://all-exhibition-ssxst31.koyeb.app/detail/${1}`,
    }).then(function (res) {
      setCulturalEvent(res.data[0]);
    });
  }, [id]);

  useEffect(() => {
    let ins = document.createElement("ins");
    let scr = document.createElement("script");

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

  const { mainImg, title, date, use_trgt, use_fee, place } = culturalEvent;

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
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{use_trgt}</span>
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
                <span style={{ fontSize: isMobile ? 16 : 20 }}>{use_fee}</span>
              </div>
            </div>
          </div>
          <div style={{ height: 60, weight: "100%" }} />
          <ComponentsWithNoSSR searchPlace={place.split(" ")[0]} />
        </div>
      </div>
      <DiscussionEmbed
        shortname="seeoul"
        config={{
          url: "https://seeoul.netlify.app/",
          identifier: 321,
          title: title,
          language: "ko",
        }}
        style={{
          maxWidth: isMobile ? "300px" : "1250px",
          margin: "0 auto",
          width: "100%",
        }}
      />
      <div style={{ maxWidth: isMobile ? "300px" : "728px", margin: "0 auto" }}>
        <Ad unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"} />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
