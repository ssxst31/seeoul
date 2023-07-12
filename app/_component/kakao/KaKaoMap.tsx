"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";

interface KakaoMapProps {
  lat: number;
  lng: number;
}

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const NEXT_PUBLIC_KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

const KakaoMap = ({ lat, lng }: KakaoMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (containerRef.current) {
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 4,
      });

      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lng),
        map: map,
      });
      var infowindow = new kakao.maps.InfoWindow({
        content: "1",
      });

      kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
    }
  };

  function makeOverListener(map: any, marker: any, infowindow: any) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  function makeOutListener(infowindow: any) {
    return function () {
      infowindow.close();
    };
  }

  useEffect(() => {
    if (window?.kakao) {
      initMap();
    }
  }, [initMap, lat, lng]);

  return (
    <React.Fragment>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_KEY}&autoload=false`}
        onLoad={() => window.kakao.maps.load(initMap)}
      />
      <Head>
        <link rel="preconnect" href="https://dapi.kakao.com" />
        <link rel="dns-prefetch" href="https://dapi.kakao.com" />
      </Head>

      <div id="map" ref={containerRef} className="shadow-md h-[500px] -lg:h-96 w-full" />
    </React.Fragment>
  );
};

export default React.memo(KakaoMap);
