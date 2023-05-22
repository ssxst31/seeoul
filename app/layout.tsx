import { Metadata } from "next";
import Header from "app/layouts/Header";
import Footer from "app/layouts/Footer";
import GoogleAnalytics from "app/_component/GoogleAnalytics";
import { Providers } from "app/providers";
import { isProduction } from "utils/env";

import "styles/globals.css";
import "nprogress/nprogress.css";

export const metadata: Metadata = {
  title: {
    default: "내일전시",
    template: "%s | Next.js App Router",
  },
  description: "서울 전시회 정보, 내일 전시에서 한눈에 확인해 보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProd = isProduction();

  return (
    <html lang="ko">
      {isProd ? <GoogleAnalytics /> : null}
      <head>
        <script
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
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className="bg-white dark:bg-dark-100">
        <Header />
        <Providers>
          <div className="mx-auto max-w-7xl">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
