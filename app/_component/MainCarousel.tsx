"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

import { useRandomCulturalEvent } from "app/hooks/useRandomCulturalEvent";

import CarouselSkeleton from "components/skeleton/CarouselSkeleton";

export default function MainCarousel() {
  const router = useRouter();

  const randomCulturalEventList = useRandomCulturalEvent();

  if (!randomCulturalEventList) {
    return <CarouselSkeleton width="386" height="360" />;
  }

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
    <Slider {...settings}>
      {randomCulturalEventList.map((randomCulturalEvent) => (
        <div key={randomCulturalEvent.id}>
          <div
            className="min-h-[360px] mx-4 relative -md:mx-0 "
            onClick={() => {
              router.push(`/detail/${randomCulturalEvent.title}`);
            }}
          >
            <Image
              src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
              fill
              alt={randomCulturalEvent.title}
              priority={true}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}
