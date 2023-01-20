import React, { useEffect } from "react";
import Script from "next/script";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";

import { isProduction } from "utils/env";
import type { AppProps } from "next/app";
import DefaultSEO from "./DefaultSEO";

import * as gtag from "lib/gtag";
import "styles/globals.css";
import "styles/reset.css";
import "styles/override.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProd = isProduction();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      ) : null}
      <DefaultSEO />
      <ThemeProvider enableSystem={true} attribute="class">
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
