/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: [
      "culture.seoul.go.kr",
      "localhost",
      "seoul.go.kr",
      "*",
      "scontent-gmp1-1.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
