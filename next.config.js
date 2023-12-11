/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    deviceSizes: [640, 1024, 1280],
    imageSizes: [16, 64, 96],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "culture.seoul.go.kr",
      },
      {
        protocol: "https",
        hostname: "seoul.go.kr",
      },
      {
        protocol: "https",
        hostname: "shopping-phinf.pstatic.net",
      },
    ],
  },
};

module.exports = nextConfig;
