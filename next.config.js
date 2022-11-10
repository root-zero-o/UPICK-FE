/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER: process.env.SERVER,
    KAKAO_CLIENTID: process.env.KAKAO_CLIENTID,
    KAKAO_JSKEY: process.env.KAKAO_JSKEY,
  },
};

module.exports = nextConfig;
