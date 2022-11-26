import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

import useRandomCulturalEvent from "hook/useRandomCulturalEvent";
import Skeleton from "components/Skeleton";

export default function MainCarousel() {
  const randomCulturalEventList = useRandomCulturalEvent();

  if (!randomCulturalEventList) {
    return <Skeleton width="360" height="360" />;
  }

  return (
    <Carousel autoplay slidesToShow={isMobile ? 1 : 3}>
      {randomCulturalEventList.map((randomCulturalEvent) => (
        <div key={randomCulturalEvent.id}>
          <Link href={`/detail/${randomCulturalEvent.id}`} passHref>
            <a>
              <Image
                src={isMobile ? randomCulturalEvent.mainImg.slice(0, -1) : randomCulturalEvent.mainImg}
                height={360}
                width={360}
                alt={randomCulturalEvent.title}
                loading="eager"
              />
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
