"use client";

import React, { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

interface KakaoAdFitProps {
  unit: string;
}

function KakaoAdFit({ unit }: KakaoAdFitProps) {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    if (adRef.current) {
      return;
    }

    let ins = document.createElement("ins") as any;
    let scr = document.createElement("script") as any;

    ins.className = "kakao_ad_area";
    ins.style = "display:none; width:100%;";
    scr.async = "true";
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    isMobile ? ins.setAttribute("data-ad-width", "300") : ins.setAttribute("data-ad-width", "728");
    isMobile ? ins.setAttribute("data-ad-height", "250") : ins.setAttribute("data-ad-height", "90");
    ins.setAttribute("data-ad-unit", unit);

    document.querySelector(".adfit")?.appendChild(ins);
    document.querySelector(".adfit")?.appendChild(scr);

    adRef.current = true;
  }, []);

  return <div className="adfit" />;
}

export default React.memo(KakaoAdFit);
