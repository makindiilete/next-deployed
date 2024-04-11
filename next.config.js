/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eu.louisvuitton.com",
      },
    ],
  },
};

module.exports = nextConfig;
