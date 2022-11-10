/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  images: {
    domains: ["culture.seoul.go.kr", "localhost", "seoul.go.kr", "*"],
  },
};

module.exports = nextConfig;
