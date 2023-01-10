import React from "react";

import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import useRandomCulturalEvent from "hook/useRandomCulturalEvent";
import CarouselSkeleton from "components/CarouselSkeleton";

export default function MainCarousel() {
  const randomCulturalEventList = useRandomCulturalEvent();

  if (!randomCulturalEventList) {
    return <CarouselSkeleton width="360" height="360" />;
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 638,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {randomCulturalEventList.map((randomCulturalEvent) => (
        <div key={randomCulturalEvent.id}>
          <Link href={`/detail/${randomCulturalEvent.id}`} passHref>
            <a>
              <div className="min-h-[360px] mx-4 relative ">
                <Image
                  src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
                  layout="fill"
                  alt={randomCulturalEvent.title}
                  loading="eager"
                />
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Slider>
  );
}
