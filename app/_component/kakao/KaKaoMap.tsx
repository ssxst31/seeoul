"use client";

import React, { useEffect } from "react";

interface MapProps {
  searchPlace: string;
}
declare global {
  interface Window {
    kakao: any;
  }
}

export default function KaKaoMap({ searchPlace }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchPlace, placesSearchCB);
        function placesSearchCB(data: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            let bounds = new window.kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
          }
        }
        function displayMarker(place: any) {
          let marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          window.kakao.maps.event.addListener(marker, "click", function () {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
            infowindow.open(map, marker);
          });
        }

        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div className="flex justify-between -md:flex-col">
      <div id="map" className="w-full h-[500px] -md:h-[300px]" />
    </div>
  );
}
