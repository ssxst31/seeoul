// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  try {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID as string, {
      page_path: url,
    });
  } catch (error) {
    console.error(error);
  }
};
