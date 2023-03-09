import React from "react";
import Script from "next/script";
import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { isProduction } from "utils/env";
import type { AppProps } from "next/app";
import DefaultSEO from "./DefaultSEO";
import { useGoogleAnalytics } from "hooks/useGoogleAnalytics";

import "styles/globals.css";
import "styles/reset.css";
import "styles/override.css";
import "nprogress/nprogress.css";

const myFont = localFont({ src: "./NanumSquareR.woff2" });

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();

  const isProd = isProduction();

  let typedRouter = Router as any;

  typedRouter.onRouteChangeStart = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.start();
  };

  typedRouter.onRouteChangeComplete = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  typedRouter.onRouteChangeError = ({ shallow } = { shallow: false }) => {
    if (shallow) return;
    NProgress.done();
  };

  return (
    <>
      {isProd ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      ) : null}
      <DefaultSEO />
      <ThemeProvider enableSystem={true} attribute="class">
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
