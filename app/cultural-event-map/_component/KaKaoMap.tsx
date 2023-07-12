"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/navigation";

interface KakaoMapProps {
  data: any;
}

const NEXT_PUBLIC_KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

const KakaoMap = ({ data }: KakaoMapProps) => {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  const initMap = () => {
    if (containerRef.current) {
      const map = new window.kakao.maps.Map(containerRef.current, {
        center: new window.kakao.maps.LatLng(37.55, 126.95),
        level: 9,
      });

      data.map((el: any) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          clickable: true,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: el.title,
        });

        kakao.maps.event.addListener(marker, "mouseover", makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
        kakao.maps.event.addListener(marker, "click", function () {
          router.push(`/detail/${el.title}`);
        });
      });
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
  }, [initMap]);

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
