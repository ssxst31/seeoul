import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { isMobile } from "react-device-detect";

import data from "pages/api/data.json";
import Header from "components/Header";
import Footer from "components/Footer";
import s from "./detail.module.css";

const ComponentsWithNoSSR = dynamic(
  () => import("components/Map"), // Component로 사용할 항목을 import합니다.
  { ssr: false }, // ssr옵션을 false로 설정해줍니다.
);

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [culturalEvent, setCulturalEvent] = useState(null);

  useEffect(() => {
    setCulturalEvent(data.DATA[id]);
  }, []);

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

  const { main_img, title, date, use_trgt, use_fee, place } = culturalEvent;

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className={s.mainLayout}>
          <div className={s.mobile}>
            <img
              alt={title}
              src={main_img.slice(0, -1)}
              style={{ objectFit: "contain", width: "100%", maxWidth: 500 }}
            />
            <div>
              <div>
                <span style={{ fontSize: 24, fontWeight: 700 }}>{title}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span style={{ fontSize: 16, color: "grey", fontWeight: 500 }}>
                  장소 :
                </span>
                <span style={{ fontSize: 16 }}>{place}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span style={{ fontSize: 16, color: "grey", fontWeight: 500 }}>
                  기간 :
                </span>
                <span style={{ fontSize: 16 }}>{date}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span style={{ fontSize: 16, color: "grey", fontWeight: 500 }}>
                  대상 :
                </span>
                <span style={{ fontSize: 16 }}>{use_trgt}</span>
              </div>
              <div style={{ height: 8, width: "100%" }} />
              <div>
                <span style={{ fontSize: 16, color: "grey", fontWeight: 500 }}>
                  요금 :
                </span>
                <span style={{ fontSize: 16 }}>{use_fee}</span>
              </div>
            </div>
          </div>
          <ComponentsWithNoSSR searchPlace={place.split(" ")[0]} />
        </div>
      </div>
      <div style={{ maxWidth: isMobile ? "300px" : "728px", margin: "0 auto" }}>
        <div className="adfit" />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
