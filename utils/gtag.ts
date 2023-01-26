import { isProduction, isServer } from "./env";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!isServer && window.gtag && isProduction()) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID as string, {
      page_path: url,
    });
  }
};
