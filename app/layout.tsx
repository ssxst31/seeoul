import Script from "next/script";
import { Nanum_Gothic } from "next/font/google";

import { Metadata } from "next";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import DefaultLayout from "layouts/DefaultLayout";
import GoogleAnalytics from "components/common/GoogleAnalytics";
import { isProduction } from "utils/env";

import "styles/globals.css";
import "styles/slick-theme.min.css";
import "styles/slick.min.css";

const NanumGothic = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "내일전시",
  description: "서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.",
  keywords: "전시회, 서울 전시, 전시회 추천, 내일전시,문화행사",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = isProduction();

  return (
    <html lang="ko" className={NanumGothic.className}>
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="내일전시" />
        <meta
          name="keywords"
          content="내일전시, 전시회, 문화예술, 서울전시, 서울전시회, 전시정보, 전시회 추천, exhibition"
        />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE} />
        <meta name="naver-site-verification" content={process.env.NEXT_PUBLIC_NAVER_SITE} />
      </head>
      {isProd ? <GoogleAnalytics /> : <></>}
      <body className="bg-white dark:bg-dark-100">
        <Header />
        <DefaultLayout>
          <div>{children}</div>
        </DefaultLayout>
        <Footer />
      </body>
    </html>
  );
}
