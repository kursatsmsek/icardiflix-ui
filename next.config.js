/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["wallpapercave.com", "cdn.ntvspor.net", "i3.ytimg.com"],
  },
};

module.exports = nextConfig;
