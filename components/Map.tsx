import React, { useEffect, useState } from "react";

import s from "components/main.module.css";

interface MapProps {
  searchPlace: string;
}

export default function Map({ searchPlace }: MapProps) {
  // 검색결과 배열에 담아줌
  const { kakao } = window as any;
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);

        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시

    function displayMarker(place: any) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + "</div>");
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <div className={s.mobile}>
      <div
        id="myMap"
        style={{
          width: "100%",
        }}
        className={s.myMap}
      ></div>
    </div>
  );
}
