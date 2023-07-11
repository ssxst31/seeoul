import Image from "next/image";
import Link from "next/link";

import { fetchDetailCulturalEvent } from "app/api/culturalEvents";
import KaKaoMap from "app/_component/kakao/KaKaoMap";
import Discussion from "app/_component/Discussion";

export default async function Page({ params }: any) {
  const title = params.detailSlug;

  const culturalEvent = await fetchDetailCulturalEvent({ title });

  const { mainImg, date, useTrgt, useFee, place, orgLink, lng, lat } = culturalEvent;
  const descriptionList = [
    { title: "장소", value: place },
    { title: "기간", value: date },
    { title: "대상", value: useTrgt },
    { title: "요금", value: useFee },
  ];

  const image = mainImg.replace("&thumb=Y", "");

  return (
    <main>
      <div className="relative">
        <div className="object-cover h-72 -md:hidden relative w-screen ml-[calc(-50vw+50%)]">
          <Image src={image} alt={culturalEvent.title} fill />
        </div>
        <div
          className="absolute top-0 h-72 -md:hidden w-screen ml-[calc(-50vw+50%)]"
          style={{
            backdropFilter: "blur(10px)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="px-[30px] w-full -md:pt-36 -md:px-4">
          <div className="flex -md:block">
            <div className="object-contain w-full max-w-[500px] -md:object-cover -md:w-[calc(100%+32px)] -md:max-w-none -md:ml-[-16px] -md:h-[360px] -mt-[35px] mr-5 relative">
              <Image src={image} alt={culturalEvent.title} objectFit="cover" layout="fill" />
            </div>
            <div className="-md:flex -md:w-[calc(100%+32px)] -md:mt-[-50px] -md:ml-[-16px] -md:relative bg-white -md:justify-between mt-5 dark:bg-dark-100">
              <div className="p-3">
                <div>
                  <span className="text-3xl font-bold">{culturalEvent.title}</span>
                </div>
                <div className="w-full h-2" />
                {descriptionList.map((description) => (
                  <div>
                    <span className="text-xl font-medium text-gray-500 -md:text-base">{description.title} : </span>
                    <span className="text-xl -md:text-base">{description.value}</span>
                    <div className="w-full h-2" />
                  </div>
                ))}
                <div className="-md:hidden">
                  <span className="text-xl font-medium text-gray-400 -md:text-base">
                    <Link href={orgLink} target="_blank" rel="noopener noreferrer">
                      <button className="bg-indigo-600 py-2 px-5 rounded-lg text-white text-sm">예매하기</button>
                    </Link>
                  </span>
                </div>
              </div>
              <div className="hidden -md:mt-[-50px] -md:block -md:max-h-[120px] -md:object-contain -md:w-full -md:max-w-[120px] relative">
                <Image src={image} alt={culturalEvent.title} fill />
              </div>
            </div>
          </div>
          <div className="w-full h-[60px]" />
          <KaKaoMap lat={Number(lat)} lng={Number(lng)} />
        </div>
        <div className="-md:bottom-0 hidden -md:block -md:fixed -md:w-full -md:z-[999999999]">
          <button className="w-full text-white bg-indigo-600 h-11">
            <Link href={orgLink} passHref>
              예매하기
            </Link>
          </button>
        </div>
      </div>
      <div className="w-full h-2" />
      <div className="mx-auto max-w-[1280px] px-[30px] -md:px-[16px]">
        <Discussion title={title} />
      </div>
      <div className="mx-auto -md:max-w-[300px] max-w-[728px]">
        {/* <KakaoAdFit unit={isMobile ? "DAN-ncR6s1pAyuAZtN0w" : "DAN-5fCtQtQI3q57O0n8"} /> */}
      </div>
    </main>
  );
}
