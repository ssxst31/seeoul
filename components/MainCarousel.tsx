"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

export default function MainCarousel({ randomCulturalEventList }: any) {
  const router = useRouter();
  const moving = useRef(false);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 638,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      beforeChange={(current) => {
        moving.current = true;
      }}
      afterChange={(current) => {
        moving.current = false;
      }}
    >
      {randomCulturalEventList.map((randomCulturalEvent: any) => (
        <div key={randomCulturalEvent.id}>
          <div
            className="min-h-[360px] mx-4 relative -md:mx-0 cursor-pointer"
            onClick={() => {
              if (!moving.current) {
                router.push(`/detail/${randomCulturalEvent.title}`);
              }
            }}
          >
            <Image
              src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
              fill
              sizes="100%"
              alt={randomCulturalEvent.title}
              priority={true}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}
