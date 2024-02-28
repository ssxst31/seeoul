"use client";

import React, { useState } from "react";

import DistrictList from "components/page/main/DistrictList";
import DistrictCulturalEventList from "components/page/main/DistrictCulturalEventList";

export default function Section() {
  const [location, setLocation] = useState("강동구");

  return (
    <>
      <DistrictList setLocation={setLocation} location={location} />
      <div className="w-full h-4" />
      <DistrictCulturalEventList location={location} />
    </>
  );
}
