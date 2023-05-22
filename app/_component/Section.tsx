"use client";

import React, { useState } from "react";

import DistrictList from "app/_component/DistrictList";
import DistrictCulturalEventList from "app/_component/DistrictCulturalEventList";

export default function Section() {
  const [location, setLocation] = useState("강동구");
  return (
    <>
      <DistrictList setLocation={setLocation} location={location} />
      <div className="w-full h-7 -md:h-4" />
      <DistrictCulturalEventList location={location} />
    </>
  );
}
