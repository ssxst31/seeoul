type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
