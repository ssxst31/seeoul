import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const snsList = [
    { id: 1, img: "/instagram.svg", link: "https://www.instagram.com/seeou1", alt: "instagramLogo" },
    { id: 2, img: "/twitter.svg", link: "https://twitter.com/seeou11", alt: "twitterLogo" },
    {
      id: 3,
      img: "/facebook.svg",
      link: "https://www.facebook.com/profile.php?id=100083987572734",
      alt: "facebookLogo",
    },
  ];

  return (
    <footer className="w-full py-8 text-center bg-gray-50 flex-column dark:bg-dark-200">
      <div className="mx-auto max-w-7xl px-[30px] -md:px-4 -md:mx-0">
        <div className="flex justify-between text-black dark:text-white">
          <small>ⓒ 내일전시 2022 All Rights Reserved.</small>
          <div className="flex flex-col text-sm text-black dark:text-white">
            <span className="text-right">출처 - 서울특별시, 서울문화포털(culture.seoul.go.kr)</span>
            <Link href="https://icons8.com" target="_blank" rel="noopener noreferrer">
              <span className="text-right">icons8에서 아이콘 제공</span>
            </Link>
          </div>
        </div>
        <div className="flex pt-12 space-x-2">
          {snsList.map((sns) => {
            return (
              <Link href={sns.link} passHref key={sns.id}>
                <div className="inline-flex bg-white rounded-[50%]">
                  <Image width={25} height={25} src={sns.img} alt={sns.alt} />
                </div>
              </Link>
            );
          })}
          <Link href="/blog" passHref>
            <div className="inline-flex bg-white rounded-[50%]">
              <Image width={25} height={25} src="/blog.svg" alt="blogLogo" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
