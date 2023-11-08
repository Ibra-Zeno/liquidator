/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/yd0p4ozm/production/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
