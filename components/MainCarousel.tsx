import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

import { useRandomCulturalEvent } from "hooks/useRandomCulturalEvent";
import CarouselSkeleton from "components/skeleton/CarouselSkeleton";

export default function MainCarousel() {
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
      {randomCulturalEventList.map((randomCulturalEvent, index) => (
        <div key={randomCulturalEvent.id}>
          <Link href={`/detail/${randomCulturalEvent.title}`}>
            <div className="min-h-[360px] mx-4 relative -md:mx-0">
              <Image
                src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
                layout="fill"
                alt={randomCulturalEvent.title}
                priority={true}
              />
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
