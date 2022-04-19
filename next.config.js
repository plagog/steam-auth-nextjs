/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STEAM_SECRET: process.env.STEAM_SECRET,
    STEAM_API_KEY: process.env.STEAM_API_KEY,
    PUBLIC_DOMAIN: process.env.PUBLIC_DOMAIN,
  },
  images: {
    domains: ["steamcdn-a.akamaihd.net"],
  },
};

module.exports = nextConfig;
