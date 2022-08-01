import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import data from "pages/api/data.json";
import Header from "components/Header";
import Footer from "components/Footer";
import Map from "components/Map";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [culturalEvent, setCulturalEvent] = useState(null);

  useEffect(() => {
    setCulturalEvent(data.DATA[id]);
  }, []);

  if (!culturalEvent) {
    return <div />;
  }

  const { main_img, title, date, use_trgt, use_fee, place } = culturalEvent;

  return (
    <>
      <Header />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ paddingTop: 120, width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img alt={title} src={main_img} style={{ objectFit: "cover" }} />
            </div>
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
          <Map searchPlace={culturalEvent.place} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
