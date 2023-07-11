/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    deviceSizes: [640, 1024, 1280],
    imageSizes: [16, 64, 96],
    domains: [
      "culture.seoul.go.kr",
      "localhost",
      "seoul.go.kr",
      "*",
      "scontent-gmp1-1.cdninstagram.com",
      "scontent-ssn1-1.cdninstagram.com",
      "video-ssn1-1.cdninstagram.com",
      "seeoul.netlify.app",
    ],
  },
};

module.exports = nextConfig;
