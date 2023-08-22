"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

import RandomCulturalEvent from "components/RandomCulturalEvent";
import { CulturalEvent } from "type";

interface MainCarouselProps {
  randomCulturalEventList: CulturalEvent[];
}

export default function MainCarousel({ randomCulturalEventList }: MainCarouselProps) {
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
      {randomCulturalEventList.map((randomCulturalEvent) => (
        <RandomCulturalEvent key={randomCulturalEvent.id} randomCulturalEvent={randomCulturalEvent} moving={moving} />
      ))}
    </Slider>
  );
}
